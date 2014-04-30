﻿var express = require( 'express' ),
    bodyParser = require( 'body-parser' ),
    stylus = require( 'stylus' ),
    cookieParser = require( 'cookie-parser' ),
    session = require( 'express-session' ),
    passport = require('passport');

module.exports = function ( app, config ) {
    app.set( 'view engine', 'jade' );
    app.set( 'views', config.rootPath + '/server/views' );
    app.use( cookieParser() );
    app.use( bodyParser() );
    app.use( session({secret: 'magicunicorn'}) );
    app.use( stylus.middleware( {
        src: config.rootPath + '/public', // .styl files are located in `views/stylesheets`
        compile: function ( str, path ) { // optional, but recommended
            return stylus( str ).set( 'filename', path );
        }
    }) );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use( express.static( config.rootPath + '/public' ) );
}