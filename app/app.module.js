var app = angular.module('payroll', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
      
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")
      
    $stateProvider
		.state('home', {
			url: "/",
			templateUrl: "partials/listemployees.html",
			controller: function($scope) {}
		})
		.state('payemployee', {
			url: "/payemployee/:id",
			templateUrl: "partials/payemployee.html",
			controller: function($scope, $stateParams) {}
		})
		.state('employeehistory', {
			url: "/employeehistory/:id",
			templateUrl: "partials/employeehistory.html",
			controller: function($scope, $stateParams) {
				$scope.currentEmployee = $stateParams.id;
			}
		})
		.state('employeedetails', {
			url: "/employeedetails/:id",
			templateUrl: "partials/employeedetails.html",
			controller: function($scope, $stateParams) {
				$scope.currentEmployee = $stateParams.id;
			}
		})
		.state('editemployeedetails', {
			url: "/editemployeedetails/:id",
			templateUrl: "partials/editemployeedetails.html",
			controller: function($scope, $stateParams) {
				$scope.currentEmployee = $stateParams.id;
			}
		})
});