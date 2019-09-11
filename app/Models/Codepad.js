'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Codepad extends Model {
  devLanguage () {
    return this.hasOne('App/Models/DevLanguage', 'language_id', 'id');
  }

  snippets () {
    return this.hasMany('App/Models/Snippet', 'id', 'codepad_id');
  }
}

module.exports = Codepad
