'use strict'

/*
|--------------------------------------------------------------------------
| SnippetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Snippet = use('App/Models/Snippet')

class SnippetSeeder {
  async run () {

    const snippets = [
      {
        title: 'Adonis migration',
        codepad_id: 1, // Nodejs
        description: `The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.`,
        code: `/** @type {import('@adonisjs/lucid/src/Factory')} */
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
        
        module.exports = UserSeeder`
      },
      {
        title: 'Defining routes',
        codepad_id: 1, // Nodejs
        description: `The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.`,
        code: `Route.get('/', 'IndexController.home').as('home');
        Route.get('status', 'IndexController.status').as('status');`
      },
      {
        title: 'HTML boilerplate',
        codepad_id: 4, // HTML
        description: `The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.`,
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Test</title>
        </head>
        <body>
          <h1>Login page</h1>
        </body>
        </html>`
      },
      {
        title: 'Link (href)',
        codepad_id: 4, // HTML
        description: `The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.`,
        code: `<p>
        Don't know where to start? Read the <a href="https://adonisjs.com/docs">documentation</a>.
      </p>`
      },
      {
        title: 'Basic style (body)',
        codepad_id: 5, // CSS
        description: `The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.`,
        code: `body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          background-image: url("/splash.png");
          background-color: #220052;
        }`
      },
      {
        title: 'Imports',
        codepad_id: 5,
        code: `@import url('https://fonts.googleapis.com/css?family=Montserrat:300');`
      },
      {
        title: 'HTML basic syntax',
        codepad_id: 7,
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Test</title>
        </head>
        <body>
          <h1>Login page</h1>
        </body>
        </html>`
      }
    ]

    try {
      await Snippet.createMany(snippets);
      console.log('Successfully created snippets.');
    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = SnippetSeeder
