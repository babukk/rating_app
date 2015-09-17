
angular.module('ratings.list', [])
.controller('ratingsListCtrl', [
             '$scope','collection','$state',
    function ($scope,  collection,  $state) {
        $scope.model = collection('rating');
        $scope.model.load();

        $scope.create = function() {
            $state.go('ratings.detail', {id: -1});
        };

        $scope.edit = function(rowid) {
            $state.go('ratings.detail', {id: rowid});
        };
    }
])
.run(function(paginationConfig){
    paginationConfig.firstText = '\u2190\u2190';
    paginationConfig.previousText = '\u2190сюда';
    paginationConfig.lastText = '\u2192\u2192';
    paginationConfig.nextText = 'туда\u2192';
})
;
