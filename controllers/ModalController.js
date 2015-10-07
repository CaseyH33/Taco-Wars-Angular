tacoWars.controller('ModalCtrl', function ModalCtrl($scope, $modal, $log, TacosFactory) {
  $scope.tacos = TacosFactory.tacos;

  $scope.buyBox = function(size) {
    console.log(size);
    var modalInstance = $modal.open({
      templateUrl: '../modals/buyModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        tacos: function() {
          return $scope.tacos;
        },
        taco: function() {
          return size;
        }
      }
    });
  };
});
