'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevLanguagesSchema extends Schema {
  up () {
    this.create('dev_languages', (table) => {
      table.increments()
      table.string('name', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('dev_languages')
  }
}

module.exports = DevLanguagesSchema
