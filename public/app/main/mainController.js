'use strict'
app.controller('MainController', function($scope){
    $scope.courses = [
        {name:"C# for beginners", featured:false, published: new Date('10/5/2013')},
        {name:"Super duper experts C#", featured:true, published: new Date('12/12/2013')},
        {name:"Visual basic", featured:false, published: new Date('8/19/2013')},
        {name:"Assembly, because hardcore", featured:true, published: new Date('12/5/2013')},
        {name:"Photoshop for lammers", featured:false, published: new Date('9/9/2013')},
        {name:"CSS, nobody likes it", featured:true, published: new Date('11/6/2013')},
        {name:"HTML5 and some shit", featured:false, published: new Date('1/1/2013')},
        {name:"C++ Algoriths", featured:true, published: new Date('9/5/2013')},
    ]
});