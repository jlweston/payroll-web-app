angular
	.module('payroll')
	.factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http) {
	
	console.log('Dataservice called.');
	
    return {
        employees: employees
    };
	
	
    function employees() {
        return $http.get('http://localhost/employee')
			.then(getEmployeesSuccessful);
		
		function getEmployeesSuccessful(response) {
			console.log('Data retrieved from server.');
			return response.data;
		}
    }
}