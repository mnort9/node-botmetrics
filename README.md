# node-botmetrics

Official NodeJS client for [BotMetrics](https://bot-metrics.com). A tool for chat bot analytics and conversation history.

### Installation

```
npm install node-botmetrics --save
```

### Usage

```
var BotMetrics = require('node-botmetrics');
var botmetrics = new BotMetrics(TOKEN); // API Token

botmetrics.track({
    text: 'Hi there!',
    message_type: 'incoming',
    user_id: '5436739',
    conversation_id: 'conv_14533462',
    platform: 'messenger'
});
```

#### Optional callback

```
botmetrics.track(message, function(err, msg) {
    if (err) return console.log(err);
    console.log('Message tracked => ', msg);
});
```

### Documentation
View all message parameters here: https://bot-metrics.com/docs 