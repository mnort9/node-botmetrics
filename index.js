var request = require('request');
var util = require('util');

function BotMetrics(token, debug) {
    this.token = token;
    this.debug = debug;
    
    var self = this;
    
    this.track = function(data, cb) {
        self._post(null, null, data);
    };
    
    this.facebook = {
        trackIncoming: function(data, cb) {
            self._post('incoming', 'facebook', data, cb);
        },
        trackOutgoing: function(data, cb) {
            self._post('outgoing', 'facebook', data, cb);
        }
    };
}

BotMetrics.prototype._post = function(messageType, platform, body, cb) {
    var _cb = cb || function() {};

    var params = {
        token: this.token
    };
    
    if (messageType) params.message_type = messageType;
    if (platform) params.platform = platform;
    
    var options = {
        url: 'https://api.bot-metrics.com/v1/messages',
        qs: params,
        method: 'POST',
        json: body
    };
    
    var self = this;
    request(options, function (err, res, body) {
        if (self.debug) {
            if (err) return console.log('BotMetrics Error: ' + err);
            if (body) console.log(util.inspect(body, { depth: null, colors: true }));
        }

        _cb(err);
    });
};

module.exports = function(token, debug) {
    return new BotMetrics(token, debug);
};
