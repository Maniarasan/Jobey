'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const getJobs = require('./getJobs');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/getJobs', function (req, res) {
    var name = req.param('first name');
    var job = req.param('job');
    var where = req.param('location');
    var body;
    var jsonResponse = [];
    var gitJobs = new getJobs.gitJobs(job, where, function (resp) {
        console.log(resp);
    res.send(resp);
    });

})

function oneJob() {
    res.send(resp);
}

var server = app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port %s", server.address().port);
});