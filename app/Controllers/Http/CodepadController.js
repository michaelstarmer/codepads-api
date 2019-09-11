'use strict';

const Codepad = use('App/Models/Codepad');
const Snippet = use('App/Models/Snippet');
const SnippetTag = use('App/Models/SnippetTag');

class CodepadController {

  async codepads({request, response, auth}) {
    try {
      console.log(request.headers());
      let codepads;
      const user = await auth.getUser();
      const codepadsQuery = await Codepad.query().with('devLanguage').where('user_id', user.id).orderBy('id', 'asc').fetch();
      console.log('Checked user:', user);
      if(codepadsQuery)
        codepads = codepadsQuery.toJSON();

      console.log({codepads})
      return response.json({success: true, codepads});
    } catch (error) {
      console.log(error);
      return response.json({success: false});
    }
  }

  async dev_languages({request, response, auth}) {
    const user = await auth.check()
  }

  async single_codepad({params, response}) {

    const { id } = params;

    const codepadQuery = await Codepad.query().where('id', id).with('snippets').with('snippets.tags').with('devLanguage').orderBy('id', 'desc').fetch();

    if(!codepadQuery)
      return response.json({success: false, msg: "No results..."});

    let codepad = codepadQuery.toJSON();

    try {
      console.log({codepad});
      return response.json({ success: true, codepad });
    } catch (error) {
      console.log(error);
      return response.json({success: false, error});
    }
  }

  async create_snippet({request, response}) {
    console.log("Creating snippet...");
    try {
      const data = request.post();
      const codepad_id = request.params.id;
      console.log(data)
      const newSnippet = {
        title: data.title,
        codepad_id,
        description: data.description,
        code: data.code
      }

      const created = await Snippet.create(newSnippet);

      return response.json({success: true, data: created});
    } catch (error) {
      console.log(error);
      return response.json({success: false, error});
    }
  }

  async delete_snippet({request, params, response}) {
    const { id } = request.params;

    console.log(`Deleting snippet with ID: ${id}`);

    try {
      const snippet = await Snippet.query().where('id', id).first();
      if(!snippet) {
        console.log({snippet})
        return response.json({ success: false, error: 'Snippet not found' });
      }
      console.log({snippet});
      await snippet.delete();
      return response.json({ success: true, msg: "Item deleted successfully." });
    } catch (error) {
      console.log('Could not delete snippet.', error);
      return response.json({ success: false, error });
    }
    
  }

}

module.exports = CodepadController;