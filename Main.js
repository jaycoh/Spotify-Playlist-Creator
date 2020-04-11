var request = require('request');
var token = "BQDEZWMc-3k5fJf9EHT22OXImto-THixHwUJysHmYfh9iVYapblJjo8rEcYRvbbAW9qSHl9Kze5PQ1Is8g95Xnza3W_o2Mpn3evTGxgw1sQwjN9Jacc6Tp9JF18_f54bOshUvsidNXGWpnR1G_avLX25c9P8fADscE7J9xVBc1cpLao9rluSGHPBJWbX_Wo_3HEB5btZrb6mfr8AlWxE-EZmHUFcmPAIWslw5kyY5KfSPjsGwTJHlDevuKOVErhSJ8p9mzMjNcU"
var accountSID = "AC285755a72ceac945829ff8b00267e5d8";
var twilioToken = "e825540285dcef954ade2d8f11f07b9f";
var myNum = "+17786360256";
var twilioNum = "+14149398783";

class PlayListManager {

    static createPlaylist(name) {
        var options = {
            'method': 'POST',
            'url': 'https://api.spotify.com/v1/users/relaxmax/playlists',
            'headers': {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": name,"collaborative":false,"public":true})
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log("Made the playlist " + name + "!!");
        });
    }
}



class TextManager {
    static messagesSent = [];
    static messagesToDelete = [];
    static client = require('twilio')(accountSID, twilioToken);

    static getNewTexts() {

        const client = require('twilio')(accountSID, twilioToken);
        const texts = [];
        const SIDToDelete = [];

        return client.messages.list({
            limit: 2,
            to: twilioNum
        }).then(messages => messages.forEach(m => {
            texts.push(m.body);
            SIDToDelete.push(m.sid);
        }))
            .then(value => {
                this.messagesSent = texts;
                this.messagesToDelete = SIDToDelete;
            });
    }

    static deleteReadTexts() {
        TextManager.messagesToDelete.forEach(value => TextManager.deleteText(value))
            .then(TextManager.messagesToDelete = [])
            .then(TextManager.messagesSent = []);
    }

    static deleteText(sid) {
        this.client.messages(sid).remove();
    }

}
// Create playlist
// PlayListManager.createPlaylist("Test from webstorm");

    //Get texts
    TextManager.getNewTexts().then(val => {
        texts = TextManager.messagesSent;
        console.log("received texts: " + texts);
        texts.forEach(text => {
            // Perform query to find song

                // Add song to Spotify queue

                    // Delete texts
        })
    });










