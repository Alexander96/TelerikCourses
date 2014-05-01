app.controller('CourseDetailsController', function($scope, $routeParams, CachedCourses){
    //$scope.course = CourseResource.get({id: $routeParams.id});
    $scope.course = CachedCourses.query().$promise.then(function(collection){
        collection.forEach(function(course){
            if(course._id === $routeParams.id){
                $scope.course = course;
            }
        });
    });
});