'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')

Route.get('/', 'IndexController.home').as('home');
Route.get('status', 'IndexController.status').as('status');

/**
 * Auth
 */
Route.group(() => {
  Route.get('login/:username?/:password?', 'LoginController.login').as('get.login');
  Route.post('login', 'LoginController.login').as('post.login');
  Route.get('validate', 'LoginController.validate').as('get.validate');
  Route.get('logout', 'LoginController.logout').as('logout');

  Route.get('status', 'IndexController.status').as('status');
}).prefix('api/v1')

Route.group(() => {
  Route.get('codepads', 'CodepadController.codepads').as('get.codepads');
  Route.post('codepad/:id/create_snippet', 'CodepadController.create_snippet').as('post.snippet');
  Route.get('codepad/:id', 'CodepadController.single_codepad').as('get.single.codepad');
}).prefix('api/v1')

Route.group(() => {
  Route.get('snippet/:id/delete', 'CodepadController.delete_snippet').as('delete.snippet');
}).prefix('api/v1')

Route.group(() => {

}).prefix('api/v1')