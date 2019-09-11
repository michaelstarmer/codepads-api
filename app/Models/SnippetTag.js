'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SnippetTag extends Model {
  snippet () {
    return this.belongsTo('App/Models/Snippet')
  }
}

module.exports = SnippetTag
