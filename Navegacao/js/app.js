angular.module('appNavegacao',['ngRoute'])

	.controller('main', function($scope, $routeParams) {
		$scope.mensagem = "Bem vindo a pagina principal";
	})


	.controller('teste1', function($scope, $routeParams) {
		$scope.mensagem = "Bem vindo a Teste1";
	})


	.controller('teste2', function($scope, $routeParams) {
		$scope.mensagem = "Bem vindo a Teste2";
	})


	.config(function($routeProvider, $locationProvider){
			// remove o # da url
   			//$locationProvider.html5Mode(true);

			$routeProvider.
			when('/',{controller: 'main', templateUrl:'main.html'}).
			when('/teste1',{controller: 'teste1', templateUrl:'teste1.html'}).
			when('/teste2',{controller: 'teste2', templateUrl:'teste2.html'}).
			otherwise({redirectTo: '/'});

	});


