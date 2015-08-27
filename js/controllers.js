var phonecatControllers = angular.module('phonecatControllers',[]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
   function($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = 'name';

      $scope.title = {
         name: "Phone Gallery App",
         dev: "Jared Hyers",
         version: '1.0',
         tech: "Angular, HTML, CSS, Bootstrap",
      }
   }]);
   
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
   function($scope, $routeParams, Phone){
      $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
         $scope.mainImageUrl = data.images[0];
      });
      $scope.setImage = function(imageUrl){
         $scope.mainImageUrl = imageUrl;
      };
   }]);
