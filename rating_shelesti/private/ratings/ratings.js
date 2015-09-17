angular.module('ratings', [
    'ratings.list',
    'ratings.detail'
])
.config(
     function ($stateProvider, $urlRouterProvider) {
         var templateUrl = function(url) {
             return '/priv/ratings/' + url;
         };

         // $urlRouterProvider.when('/ratings', '/ratings/list');
         $stateProvider
             .state('ratings', {
                 abstract: true,
                 url: '/ratings',
                 templateUrl: templateUrl('ratings.html')
             })
             .state('ratings.list', {
                 url: '/list',
                 templateUrl: templateUrl('ratings_list.html'),
                 controller: 'ratingsListCtrl'
             })
             .state('ratings.detail', {
                 url: '/{id:int}',
                 templateUrl: templateUrl('ratings_detail.html'),
                 controller: 'ratingsDetailCtrl'
             });
     }
);
