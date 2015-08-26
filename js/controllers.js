var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
   function($scope, $http) {
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
   }]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
   function($scope, $routeParams, $http){
      $http.get('js/phones/' + $routeParams.phoneId + '.json').success(function(data){
         $scope.phone = data;
         $scope.mainImageUrl = data.images[0];
      });
      $scope.setImage = function(imageUrl){
         $scope.mainImageUrl = imageUrl;
      };
   }]);
