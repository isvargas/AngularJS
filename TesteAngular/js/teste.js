angular.module('testeApp',[])
	.controller('testeController', function($scope) {
		$scope.mensagem = "Ola mundo!";
		
		$scope.contador = 0;
		
		$scope.minhaLista = [
			{id: 1, nome: 'Elemento Um'},
			{id: 2, nome: 'Elemento Dois'},
			{id: 3, nome: 'Elemento Tres'}
		];

		$scope.dados = "";

		$scope.ola = function() {
			alert("Ola mundo!");
		};

		$scope.mudar = function() {
			$scope.mensagem = "Nova mensagem!";
		};

		$scope.add = function() {
			$scope.contador += 1;
		};

		$scope.addItem = function() {
			$scope.minhaLista.push({ id: $scope.contador, nome: $scope.itemNome});
		};

		$scope.setDados = function() {
			$scope.dados = "Dados registrados aki!";
		};

		$scope.clearDados = function() {
			$scope.dados = "";
		};
	});