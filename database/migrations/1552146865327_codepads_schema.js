'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CodepadsSchema extends Schema {
  up () {
    this.create('codepads', (table) => {
      table.increments(),
      table.string('title', 40)
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('language_id').unsigned().nullable().references('id').inTable('dev_languages').onDelete('CASCADE').onUpdate('CASCADE')
      table.enum('status', ['active', 'archived']).defaultsTo('active')
      table.timestamps()
    })
  }

  down () {
    this.drop('codepads')
  }
}

module.exports = CodepadsSchema
