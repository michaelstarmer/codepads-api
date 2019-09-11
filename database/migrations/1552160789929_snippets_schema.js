'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SnippetsSchema extends Schema {
  up () {
    this.create('snippets', (table) => {
      table.increments()
      table.string('title', 255)
      table.integer('codepad_id').unsigned().references('id').inTable('codepads').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('description', 255)
      table.string('code', 10000)
      table.timestamps()
    })
  }

  down () {
    this.drop('snippets')
  }
}

module.exports = SnippetsSchema
