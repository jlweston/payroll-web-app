angular
	.module('payroll')
	.controller('EmployeeController', EmployeeController);

EmployeeController.$inject = ['dataservice', '$scope'];

console.log('App started.');

function EmployeeController(dataservice, $scope) {
	var vm = this;
	vm.employees = [];
	
	getEmployees();

    function getEmployees() {
		console.log('getEmployees() called.');
        return dataservice.employees()
            .then(function (employee) {
                vm.employees = employee;
                $scope.employees = vm.employees;
            });
    }
}