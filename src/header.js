app.controller("headerController", function($scope) {
    $scope.class = "menu-closed";
    $scope.changeClass = function() {
        if($scope.class === "menu-closed") {
            $scope.class = "menu-opened"
        } else {
            $scope.class = "menu-closed";
        }
    }
})