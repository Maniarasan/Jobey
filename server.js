
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const pingGithub = require('./pingGithub');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/sample', function (req, res) {
    var name = req.param('first name');
    var job = req.param('job');
    var where = req.param('location');
    var body;
    var jsonResponse = [];
    // res.send(jsonResponse);
    var gitJobs = new pingGithub.gitJobs(job, where, function (resp) {
    res.send(resp);
    });

})

// function gitJobs(job, location, callback) {
//     var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+job+"&city="+location+"&direct=1&pgcnt=1";
//     request(url, function (err, res, body) {
//         callback(body);
//     });
// }


var server = app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port %s", server.address().port);
});