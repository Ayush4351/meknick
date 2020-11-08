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

app.controller('appointmentController', ['$scope', '$http', '$window', ($scope, $http, $window) => {

    $scope.buttonValue = "Book Appointment"
    $scope.data = {
        fullName: "",
        email: "",
        mobile: "",
        pickup: "",
        dropoff: "",
        pickupdate: "",
        time: "",
        manufacturer: "",
        vehicleModel: ""
    };

    $scope.submitForm = async function () {
        $scope.buttonValue = "Please wait...."
        console.log("Posting Data.....");
        await $http.post('http://localhost:3000/appointments', JSON.stringify($scope.data)).then(function () {
            $scope.buttonValue = "Book Appointment"
            alert("Appointment booked");
            $window.location.href = '/';
        })
    }
}])

app.controller('subscriptionController', ['$scope', '$http', '$window', ($scope, $http, $window) => {

    $scope.subscribeButton = "Subscribe Now"
    $scope.subscribeUser = {
        username: "",
        email: "",
    };

    $scope.subscribe = async function () {
        $scope.subscribeButton = "Please wait...."
        await $http.post('http://localhost:3000/subscribedUsers', JSON.stringify($scope.subscribeUser)).then(function () {
            $scope.subscribeButton = "Subscribe Now";
            alert("Newsletter Subscribed");
            $window.location.href = '/';
        })
    }
}])