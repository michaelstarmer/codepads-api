'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DevLanguage extends Model {
  codepads () {
    return this.belongsToMany('App/Models/Codepad', 'id', 'language_id')
  }
}

module.exports = DevLanguage
