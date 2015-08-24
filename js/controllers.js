angular.module('phonecatApp', [])
.controller('PhoneListCtrl', function($scope){
   $scope.phones= [
      {
         name: 'Nexus S',
         snippet: 'Fast just got faster with Nexus S.'
      },
      {
         name: 'Motorola X00m with Wi-Fi',
         snippet: 'The Next, Next Generation tablet'
      },
      {
         name: 'Motorola X00m',
         snippet: 'The Next, Next Generation tablet'
      }
   ];

   $scope.name = "Jared";
});
