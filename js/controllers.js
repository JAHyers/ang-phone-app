angular.module('phonecatApp', [])
.controller('PhoneListCtrl', function($scope, $http){
   $http.get('js/phones/phones.json').success(function(data){
      $scope.phones = data;
   });

   $scope.orderProp = 'age';

   $scope.name = "Jared Phone Gallery App";
});
