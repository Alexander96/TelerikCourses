var http = require('http'),
    express = require('express'),
    port = process.env.port || 1234,
    bodyParser = require('body-parser');
    stylus = require('stylus'),
    mongoose = require('mongoose');
    env = process.env.NODE_ENV || 'development';

var app = express();
mongoose.connect('mongodb://localhost/telerikcourses');
var db = mongoose.connection;
db.once('open', function(err){
    if(err) {console.log('Database could not be opened ' + err);return;}
    console.log("Database up and running...");
});
db.on('error', function(err){
    console.log('Database error ' + err);
});

var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);
var messageFromDataBase;

Message.remove({}).exec(function(err){
    if(err){
        console.log('Messages could not be removed ' + err);
        return;
    }
    console.log('Messages deleted!');
    Message.create({message: 'Hi from mongoose'})
    .then(function(model){
        messageFromDataBase = model.message;
        console.log(model.message);
    });
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


app.get('/partials/:partialName', function(req, res){
    res.render('partials/' + req.params.partialName);
});
app.get('/', function(req, res){
    res.render('index', {message: messageFromDataBase});
});

app.listen(port);
console.log('Server running on port ' + port);