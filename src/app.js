const app = angular.module("app", ['ngMessages', '720kb.datepicker']);

//Header Controller
app.controller('headerController', ['$scope', ($scope) => {
    $scope.class = "header";
    $scope.changeClass = () => {
        if ($scope.class === "header") {
            $scope.class = "header menu-opened";
        } else {
            $scope.class = "header";
        }
    }
}])

app.controller('appointmentController', ['$scope', ($scope) => {

}])