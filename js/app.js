var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phoneControllers']);

//Requesting $routeProvider to be injected
phonecatApp.config(['$routeProvider', function($routeProvider){
   //Define routes
   $routeProvider.
      //Phone list view to be shown when URL matches /phones
      //use phone-list.html and PhoneListCtrl
      when('/phones', {
         templateUrl: 'partials/phone-list.html',
         controller: 'PhoneListCtrl'
      }).
      //Phone list view to be shown when URL matches /phones/:phoneId
      //:phoneId variable part of URL
      //Use phone-detail.html and PhoneDetailCtrl
      when('/phones/:phoneId', {
         templateUrl: 'partials/phone-detail.html',
         controller: 'PhoneDetailCtrl'
      }).
      //redirect to /phones when browser doesnt match above routes.
      otherwise({
         redirectTo: '/phones'
      });
}]);
