﻿var usersController = require('../controllers/usersController.js'),
    auth = require('./auth.js');

var User = require('mongoose').model('User');
module.exports = function (app) {
    app.get('/api/users', auth.isInRole('admin'),usersController.getAllUsers );
    app.post('/api/users', usersController.createUser);
    app.put('/api/users',auth.isAuthenticated, usersController.updateUser);
    app.get('/partials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName);
    });
    app.post('/login',auth.login);
    app.post('/logout', auth.logout);
    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user});
    });
};