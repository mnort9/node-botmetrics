var request = require('request');

function BotMetrics(token) {
    this.token = token;
}

BotMetrics.prototype.track = function(data, cb) {
    var options = {
        url: 'https://api.bot-metrics.com/v1/messages',
        qs: { token: this.token },
        method: 'POST',
        json: { message: data }
    };

    request(options, function (err, res, body) {
        if (!cb) return;
        if (err) return cb(err);
        if (body.error) return cb(body.error);
        cb(null, body);
    });
};

module.exports = BotMetrics;