var request = require('request');

function gitJobs(job, location, callback) {
    var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=" + job + "&city=" + location + "&direct=1&pgcnt=5";
    var jsonResponse = [];
    request(url, function (err, res, body) {
        if(res.statusCode == 201){
        console.log('error:', err);
        parsed = JSON.parse(body);
        for (var i = 0; i < 5; i++) {
            jsonResponse.push({
                "text": "Url is " + parsed['resultItemList'][i]['detailUrl'] + " Ok va ?"
            });
        }
        callback(jsonResponse);
    }
    else {
        jsonResponse.push({
                "text": "Couldnt Find any matches"
            });
            callback(jsonResponse);
    }
    });
}

module.exports = {
    gitJobs: gitJobs
};