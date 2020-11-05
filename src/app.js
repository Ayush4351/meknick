const app = angular.module("app", []);

//Header Controller
app.controller('headerController', ($scope) => {
    $scope.class = "header";
    $scope.changeClass = () => {
        if ($scope.class === "header") {
            $scope.class = "header menu-opened";
        } else {
            $scope.class = "header";
        }
    }
})