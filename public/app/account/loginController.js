app.controller('LoginController', function($scope){
    $scope.login = function(user){
        console.log(user.userName + ' ' + user.password);
    };
});