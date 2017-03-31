// Define the `restoApp` module
var restoApp = angular.module('restoApp', []);

// Define the `ProductListController` controller on the `restoApp` module
restoApp.controller('ProductListController', function ProductListController($scope, $http) {
	var cart = [];
	$scope.cartCnt = 0;
	$scope.name;
	$scope.address;
	$scope.phone;
	$scope.apprCheck = false;
	$scope.showAdminData = function () {
		//show more functionality
		var pagesShown = 1;
		var pageSize = 3;

		$http.get('http://localhost:3000/products/orders').
			then(function (response) {
				$scope.datalists = response.data;
			});
		$scope.datalists = [];
	};
	$scope.showData = function () {
		//show more functionality
		var pagesShown = 1;
		var pageSize = 3;

		$http.get('http://localhost:3000/products/').
			then(function (response) {
				$scope.datalists = response.data;
			});
		$scope.datalists = [];
		$scope.paginationLimit = function (data) {
			return pageSize * pagesShown;
		};
		$scope.hasMoreItemsToShow = function () {
			return pagesShown < ($scope.datalists.length / pageSize);
		};
		$scope.showMoreItems = function () {
			pagesShown = pagesShown + 1;
		};
		$scope.rate = function (alias) {
			var response = $http.put('http://localhost:3000/products/' + alias + '/rate');

			response.success(function (data, status, headers, config) {

				alert("Ocena przyjęta");

			});

			response.error(function (data, status, headers, config) {
				alert("Błąd wysłania oceny " + alias);
			});
		};
		$scope.addToCart = function (alias) {
			console.log('addToCart called with arg: ' + alias)
			cart.push(alias);
			$scope.cartCnt = cart.length;
			console.log(cart);
			console.log($scope.cartCnt)
		};
		$scope.createOrder = function() {
			console.log('create order called');
			var order = {
				name: $scope.name,
				address: $scope.address,
				phone: $scope.phone,
				cart: cart
			}
			$http.post('http://localhost:3000/products/order/', order).then(
				function succ(res){
					console.log('order OK');
					alert('Zamowienie przyjete do realizacji');
					window.location.href = '/';
				},
				function err(err){
					console.log('order ERROR');
					alert('Zamowienie napotkalo problem przy realizacji');			
				}
			);
		};

	};

});
