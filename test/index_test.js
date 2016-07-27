require('dotenv').config();
var expect = require('chai').expect;

describe('#fbSDK', function() {
    
    var botmetrics = require('../index', true)(process.env.token).facebook;
    
    describe('#trackOutgoing', function() {
        it('sends message to BotMetrics api', function() {
            var fbData = {
                recipient: { id: '111111' },
                message: { text: 'Hi there!' }
            };

            botmetrics.trackOutgoing(fbData);
            
            // TODO: Update tests for new version
            // Currenlty, doesn't check the response (callback was deprecated)
        });
    });
});

describe('#otherPlatform', function() {
    var botmetrics = require('../index', true)(process.env.token);
    
    describe('#track', function() {
        it('sends message to BotMetrics api', function() {
            var message = {
                text: 'Hi there!',
                user_id: '5436739',
                conversation_id: 'conv_14533462',
                platform: 'messenger',
                created_at: '2016-05-06T15:18:50Z',
                message_type: 'test'
            };
            
            botmetrics.track(message);
            
            // TODO: Update tests for new version
            // Currenlty, doesn't check the response (callback was deprecated)
        });
    });
});

