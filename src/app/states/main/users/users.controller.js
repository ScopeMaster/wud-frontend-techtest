(function() {
	'use strict';

	angular
	.module('wud.techtest')
	.controller('UsersController', UsersController);

  /**
   * User controller function
   */
   function UsersController($scope, UserService) {

   	var self = $scope;

   	self.users = [];
   	self.firstName = "";
   	self.lastName;
   	self.email;

	/**
	 * Retrieves all users from the server
	 */
	 function getUsersHandler() {
	 	UserService.query().$promise.then(function (result) {
	 		self.users = result;
	 	});
	 }
	 getUsersHandler();

	/**
	 * Gets user inputs and sends new user object
	 * to the server to be persisted. 
	 */
	 self.addUserHandler = function() {

	 	if(self.firstName === "" || self.lastName === "" || self.email === "") {
			return;
		}

	 	var userObj = {
	 		firstname: self.firstName,
	 		lastname: self.lastName,
	 		email: self.email
	 	};

	 	var result = UserService.addUser(userObj, function() {
	 		self.firstName = "";
	 		self.lastName = "";
	 		self.email = "";
		});

		result.$promise.then(function (result) {
	 		self.users = result;
	 	});
	}
	

}

})();
