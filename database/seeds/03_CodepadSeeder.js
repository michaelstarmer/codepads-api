'use strict'

/*
|--------------------------------------------------------------------------
| 03CodepadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Codepad = use('App/Models/Codepad')

class CodepadSeeder {
  async run () {

    const codepads = [
      {
        title: 'Migrations',
        user_id: 1,
        language_id: 1,
        status: 'active'
      },
      {
        title: 'Common stuff',
        user_id: 1,
        language_id: 4,
        status: 'active'
      },
      {
        title: 'Arrays',
        user_id: 1,
        language_id: 5,
        status: 'active'
      },
      {
        title: 'Animations',
        user_id: 1,
        language_id: 7,
        status: 'active'
      },
      {
        title: 'Layout',
        user_id: 2,
        language_id: 2,
        status: 'active'
      },
      {
        title: 'Classes',
        user_id: 2,
        language_id: 3,
        status: 'active'
      },
      {
        title: 'Interesting',
        user_id: 2,
        language_id: 4,
        status: 'active'
      }
    ]

    try {
      await Codepad.createMany(codepads);
      console.log('Successfully created codepads.');
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = CodepadSeeder
