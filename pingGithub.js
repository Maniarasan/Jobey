var request = require('request');



function gitJobs(job, location, callback) {
    var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text="+job+"&city="+location+"&direct=1&pgcnt=1";
    request(url, function (err, res, body) {
             parsed = JSON.parse(body);
             console.log(parsed['resultItemList'][0]['detailUrl']);
            var jsonResponse = [];
            jsonResponse.push({ "text": "Url is " +parsed['resultItemList'][0]['detailUrl']+ " Ok va ?" });
        callback(jsonResponse);
    });
}

module.exports = {
    gitJobs: gitJobs
};