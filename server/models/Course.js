var mongoose = require('mongoose');

var coursesSchema = mongoose.Schema({
    title: String,
    featured: Boolean,
    published: Date,
    tags: [String]
});

var Course = mongoose.model('Course', coursesSchema);
module.exports.seedInitialCourses = function(){
        Course.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cant find courses ' + err)
            return;
        }
        if ( collection.length == 0 ) {
           Course.create({title: 'C# for beginners', featured: true, published: new Date('10/5/2014'), tags: ['C#']});
           Course.create({title: 'Pedantic C++', featured: true, published: new Date('10/12/2014'), tags: ['C++']});
           Course.create({title: 'How to keep your soul and go into Menagment', featured: true, published: new Date('10/1/2014'), tags: ['Mangement']});
           Course.create({title: 'Code reviews for Jerks', featured: false, published: new Date('10/13/2014'), tags: ['Coding']});
           Course.create({title: 'Writing code that doesnt Suck', featured: true, published: new Date('3/1/2014'), tags: ['Coding']});
           Course.create({title: 'Javascript for people over 20', featured: false, published: new Date('2/15/2014'), tags: ['JS']});
        }
    });
}