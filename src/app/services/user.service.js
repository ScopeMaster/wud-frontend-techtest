(function() {
  'use strict'

	angular
	.module('wud.techtest')
	.factory('UserService', UserService);

	/**
	 * Returns user service endpoint object for server-side(RESTful) requests
	 * @param  {Object} $resource
	 * @return {Object}
	 */
  	function UserService($resource) {
  		return $resource('http://localhost:8000/users/:userId', {userId: '@userId'}, {
			addUser: {method: 'POST', url: 'http://localhost:8000/user', isArray: true}
		});
	}

})();