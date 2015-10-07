tacoWars.controller('ModalInstanceCtrl', function ModalInstanceCtrl($scope, $modalInstance, tacos, taco) {

  console.log(taco);
  $scope.taco = taco;

  $scope.tacos = tacos;
  $scope.selected = {
    taco: $scope.tacos[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.taco);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
