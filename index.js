var request = require('request');
var util = require('util');

function BotMetrics(token, debug) {
    this.token = token;
    this.debug = debug;
    
    var self = this;
    
    this.track = function(data) {
        self._post(null, null, data);
    };
    
    this.facebook = {
        trackIncoming: function(data) {   
            self._post('incoming', 'facebook', data);
        },
        trackOutgoing: function(data) {
            self._post('outgoing', 'facebook', data);
        } 
    };
}

BotMetrics.prototype._post = function(messageType, platform, body) { 
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
    });
};

module.exports = function(token, debug) {
    return new BotMetrics(token, debug);
};