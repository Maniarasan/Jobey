var request = require('request');



function gitJobs(job, location, callback) {
    var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+job+"&city="+location+"&direct=1&pgcnt=1";
    request(url, function (err, res, body) {
        callback(body);
    });
}

module.exports = {
    gitJobs: gitJobs
};