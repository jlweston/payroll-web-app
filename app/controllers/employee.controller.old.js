app.controller("employeeCtrl", function($scope, $http) {
	
    $http.get('http://localhost/employee/').
        success(function(data, status, headers, config) {
            $scope.employees = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
	
    $http.get('http://localhost/paymenthistory/').
        success(function(data, status, headers, config) {
            $scope.paymenthistory = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
	
	$scope.saveEditEmployee = function(id) {
		var data = $scope.fields;
		var url = 'http://localhost/employee/' + id;
		$http.post(url, data);
	}
	
});