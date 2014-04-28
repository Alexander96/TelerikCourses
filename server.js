var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 1234,
    bodyParser = require('body-parser');
    stylus = require('stylus'),
    mongoose = require('mongoose');
    env = process.env.NODE_ENV || 'development';

var app = express();

if ( env == 'development' ) {
    mongoose.connect('mongodb://localhost/telerikcourses');
}
else {
    mongoose.connect( 'mongodb://admin:ivanebogitovae@ds059947.mongolab.com:59947/telerikacademycourses' );
}

var db = mongoose.connection;
db.once('open', function(err){
    if(err) {console.log('Database could not be opened ' + err);return;}
    console.log("Database up and running...");
});
db.on('error', function(err){
    console.log('Database error ' + err);
});


app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(bodyParser());
app.use(stylus.middleware({
    src: __dirname + '/public', // .styl files are located in `views/stylesheets`
    compile: function (str, path) { // optional, but recommended
      return stylus(str).set('filename', path);
    }
}));
app.use(express.static(__dirname + '/public'));


app.get('/partials/:partialArea/:partialName', function(req, res){
    res.render('partials/' + req.params.partialArea + '/' + req.params.partialName);
});
app.get('/', function(req, res){
    res.render('index');
});

app.listen(port);
console.log('Server running on port ' + port);