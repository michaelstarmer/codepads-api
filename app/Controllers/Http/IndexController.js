'use strict'

class IndexController {

  async home({response,view}) {
    return response.send("OK - Home");
  }

  async status({response}) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log("Got a request from client.");
    return response.json({success: true, msg: "API is running."});
  }

}

module.exports = IndexController
