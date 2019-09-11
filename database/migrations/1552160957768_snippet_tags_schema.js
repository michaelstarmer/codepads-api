'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SnippetTagsSchema extends Schema {
  up () {
    this.create('snippet_tags', (table) => {
      table.increments()
      table.string('tag', 30)
      table.integer('snippet_id').unsigned().nullable().references('id').inTable('snippets').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('snippet_tags')
  }
}

module.exports = SnippetTagsSchema
