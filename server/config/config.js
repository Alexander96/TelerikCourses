var path = require('path');
var rootPath = path.normalize(__dirname + '/../..')

module.exports = {
    development:{
        rootPath: rootPath,
        db: 'mongodb://localhost/telerikcourses',
        port: process.env.PORT || 1234
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:ivanebogitovae@ds059947.mongolab.com:59947/telerikacademycourses',
        port: process.env.PORT || 1234
    }
}