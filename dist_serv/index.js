'use strict';

var _DataBaseUtils = require('./utils/DataBaseUtils');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/notes', function (req, res) {
    res.send('2222');
});

app.post('/notes', function (req, res) {
    res.send('lolKEK');
});

app.delete('/notes/:id', function (req, res) {
    res.send('lolKEK');
});

var server = app.listen(8080, function () {
    console.log('run server');
});