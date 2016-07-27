# node-botmetrics

Official NodeJS client for [BotMetrics](https://bot-metrics.com), bot & conversation analytics.

### Installation

```bash
npm install node-botmetrics --save
```

### Facebook Messenger SDK

```js
var botmetrics = require('node-botmetrics')('API_TOKEN').facebook;
```

#### Incoming 

```js
app.post('/webhook', function (req, res) {
    botmetrics.trackIncoming(req.body);
    
    // Handle incoming message...
}
```

#### Outgoing 

```js
// Example POST to Facebook

var fbData = {
    recipient: { id: fbUserId },
    message: {
        text: 'Hi there!'
    }
};

var options = {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FB_PAGE_TOKEN },
    method: 'POST',
    json: fbData
};

request(options, function(err, res, body) {
    if (err) return console.log(err);
    
    // After FB post is successful, send req data to BotMetrics
    botmetrics.trackOutgoing(fbData);
});
```

### Other Messaging Platforms

```js
var botmetrics = require('node-botmetrics')('API_TOKEN');

botmetrics.track({
    text: 'Hi there!',
    message_type: 'outgoing',
    user_id: '54367392345234',
    platform: 'kik'
});
```

### Debug Mode
```js
// Turn on debug mode to print BotMetrics API messages
var botmetrics = require('node-botmetrics')('API_TOKEN', true);
```


### Documentation
View complete documentation here: https://bot-metrics.com/docs 