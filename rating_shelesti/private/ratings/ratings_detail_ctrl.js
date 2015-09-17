
angular.module('ratings.detail', [])
       .controller('ratingsDetailCtrl', [
             '$scope','$state','$stateParams','instance',
    function ($scope,  $state,  $stateParams,  instance) {
        $scope.model = instance('rating');
        $scope.model.$select($stateParams.id);

        $scope.create = function() {
            $state.go('ratings.detail', {id: -1});
        };

        $scope.save = function() {
            $scope.model.$save().then(function() {
                console.log('DONE', $scope.model.id);
                $state.go('ratings.detail', {id: $scope.model.id});
            });
        };

        $scope.remove = function() {
            $scope.model.$remove().then(function() {
                $state.go('ratings.list');
            });
        };
    }
]);
