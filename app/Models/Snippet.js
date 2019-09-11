'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Snippet extends Model {
  codepad () {
    return this.belongsTo('App/Models/Codepad')
  }
  tags () {
    return this.hasMany('App/Models/SnippetTag')
  }
}

module.exports = Snippet
