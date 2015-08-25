angular.module('phonecatApp', [])
.controller('PhoneListCtrl', function($scope, $http){
   $http.get('js/phones/phones.json').success(function(data){
      $scope.phones = data;
   });

   $scope.orderProp = 'name';

   $scope.title = {
      name: "Phone Gallery App",
      dev: "Jared Hyers",
      version: '1.0',
      tech: "Angular, HTML, CSS, Bootstrap",
   }

});
