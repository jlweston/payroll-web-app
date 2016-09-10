app.controller("employeeCtrl", function($scope, $http) {
    $http.get('http://jlweston.redirectme.net/employee/').
        success(function(data, status, headers, config) {
            $scope.employees = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
	
    $http.get('http://jlweston.redirectme.net/paymenthistory/').
        success(function(data, status, headers, config) {
            $scope.paymenthistory = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
	
	$scope.saveEditEmployee = function(id) {
		var data = $scope.fields;
		var url = 'http://jlweston.redirectme.net/employee/' + id;
		$http.post(url, data);
	}
});
