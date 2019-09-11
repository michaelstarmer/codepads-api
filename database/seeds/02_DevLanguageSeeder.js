'use strict'

/*
|--------------------------------------------------------------------------
| DevLanguageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DevLanguage = use('App/Models/DevLanguage')

class DevLanguageSeeder {
  async run () {

    const devLanguages = [
      {
        name: 'NodeJS'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'PHP'
      },
      {
        name: 'HTML'
      },
      {
        name: 'CSS'
      },
      {
        name: 'Docker'
      },
      {
        name: 'Docker-compose'
      }
    ]

    try {
      await DevLanguage.createMany(devLanguages);
      console.log('Successfully created devLanguages.');
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = DevLanguageSeeder
