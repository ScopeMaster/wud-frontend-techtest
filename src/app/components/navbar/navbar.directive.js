(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .directive('wudNavbar', wudNavbar);

  /**
   * [wudNavbar [wud-navbar] directive function
   * @return {Object}
   */
  function wudNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      
      controller: function($scope, $state) {
        $scope.navBarMenuNames = [];

        /**
         * Uses a map function to filter out and store a new array
         * of menu names and state names from $stateProvider
         * get() function which returns an array of all defined states 
         */
        var tempNames = $state.get().map(
          function(obj) {
            var newObj = {};
              newObj.sref = obj.name;
              newObj.name = obj.name.split('.')[1];
           return newObj;
        });

        /**
         * Uses underscope _filter helper function to filter and 
         * return valid objects. Remove undefined objects and
         * returns only the defined ones.
         */
        $scope.navBarMenuNames = _.filter(tempNames, function(obj) {
          if(angular.isDefined(obj.name)) {
            return obj;
          }
        });

        //$log.info($scope.navBarMenuNames);
      }

    };
  }
})();
