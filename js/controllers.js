angular.module('phonecatApp', [])
.controller('PhoneListCtrl', function($scope){
   $scope.phones= [
      {
         name: 'Nexus S',
         snippet: 'Fast just got faster with Nexus S.',
         age: 1
      },
      {
         name: 'Motorola X00m with Wi-Fi',
         snippet: 'The Next, Next Generation tablet',
         age: 2
      },
      {
         name: 'Motorola X00m',
         snippet: 'The Next, Next Generation tablet',
         age:3
      }
   ];

   $scope.orderProp = 'age';

   $scope.name = "Jared Phone Gallery App";
});
