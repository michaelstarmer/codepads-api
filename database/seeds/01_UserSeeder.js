'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {

    const users = [
      {
        username: 'mps',
        email: 'michael.starmer@gmail.com',
        first_name: 'Michael',
        last_name: 'Starmer',
        password: 'password'
      },
      {
        username: 'demo',
        email: 'michael.starmer+demo@gmail.com',
        first_name: 'Demo',
        last_name: 'User',
        password: 'password'
      }
    ]

    try {
      await User.createMany(users);
      console.log('Successfully created users.');
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = UserSeeder
