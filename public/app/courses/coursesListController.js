app.controller('CoursesListController', function($scope, CachedCourses){
    $scope.courses = CachedCourses.query();
});