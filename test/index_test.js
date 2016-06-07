require('dotenv').config();
var expect = require('chai').expect;
var BotMetrics = require('../index');

describe('#track', function() {
    it('sends message to BotMetrics api', function(done) {
        var botmetrics = new BotMetrics(process.env.TOKEN);
        
        var message = {
            text: 'Hi there!',
            message_type: 'incoming',
            user_id: '5436739',
            conversation_id: 'conv_14533462',
            platform: 'messenger',
            created_at: '2016-05-06T15:18:50Z'
        };
        
        botmetrics.track(message, function(err, msg) {
            expect(err).to.be.null;
            expect(msg).to.be.ok;
            expect(msg.text).to.equal('Hi there!');
            done();
        });
    });
});