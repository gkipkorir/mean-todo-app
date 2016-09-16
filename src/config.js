import angular from 'angular';
import uiRouter from 'angular-ui-router'
import todosController from 'todos/todos'
// import 'css/master.scss' 



const app = angular.module('app', [uiRouter]); //include UI router dependency 

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => { //this is where you do the routing! 
	$urlRouterProvider.otherwise('/'); //defaults any undefied route to base route
	$stateProvider
		.state('todos', {
			url: '/',
			template: require('todos/todos.html'),
			controller: todosController
		})
		.state('about', {
			url: '/about',
			template: require('about/about.html')
		});
	$locationProvider.html5Mode(true);

});

export default app; 

