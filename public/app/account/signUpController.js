app.controller('SignUpController', function($scope,$location, auth, notifier){
    $scope.signup = function(user){
        auth.signup(user).then(function() {
            console.log('dsadsadsa');
             notifier.success('Register successful!');
             $location.path('/');
        });
    }
});