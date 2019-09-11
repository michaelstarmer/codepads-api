'use strict'
const User = use('App/Models/User');
class LoginController {

  async login_view({view, response}) {
    return view.render('login')
  }

  async login({params, response, auth}) {
    const { username, password } = params;

    console.log("Logging in");

    if(!username || !password)
      return response.json({ success: false, error: "Missing username and/or password." });

    const user = await User.query().where('username', username).first();

    if (!user) return response.json({ success: false, error: "Wrong and/or password." });

    const jwt = await auth.generate(user);
    
    try {
      if (!jwt) return response.json({ success: false, error: "Wrong and/or password." });
      console.log({jwt})
      return response.json({success: true, jwt });
    } catch (error) {
      console.log(error);
      return response.json({success: false, error});
    }
  }

  async validate({request, params, auth, response}) {
    const jwt = request.header('authorization')

    try {
      const user = await auth.check(jwt);
      return response.json({ success: true, user })
    } catch (error) {
      console.log(error);
      return response.json({success: false, error});
    }
  }

  async logout({request, auth, response}) {
    try {
      await auth.logout();
      return response.json({success: true, msg: "Successfully logged out."});
    } catch (error) {
      console.log("Error:", error);
      return response.json({success: false, error});
    }
  }

}

module.exports = LoginController
