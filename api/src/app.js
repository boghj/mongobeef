var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/test';

mongoose.connect(dbURI);

var connection = mongoose.connection;

connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
    connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS // For example 
// require('./../model/team');  