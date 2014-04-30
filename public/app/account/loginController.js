app.controller('LoginController', function($scope , $http, notifier, $location, identity, auth){
    $scope.identity = identity;
    $scope.login = function(user){
        auth.login(user).then(function(success){
            if(success){
                notifier.success('Successful login!');
            }
            else{
                notifier.error('Username or Password not matched!');
            }
        });
    };
    $scope.logout = function(){
        auth.logout().then(function(){
            notifier.success('Successfully logout!');
            $scope.user.username = '';
            $scope.user.password = '';
            $location.path('/');
        });
    }
});