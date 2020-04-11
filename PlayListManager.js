var request = require('request');
var token = "BQA33Jhotqyt20T2caGqiJcxGdpS0NEwqF1Ur0rjVwAB3upPILRkwZdj-xQYQvT-kvpw1-hRMjVEGVhTuusvqChIBX6H82HKSiCyz9vlYuCKr9ponVgyTSfCNtXDbBEzU0z1RjAZBSzjA6zbwExvkRbA25YorSQ4b-A7msrLTfVIADcGXDGUYS-PTfz3ekjfRp61uMif70P_JNodmGeKSYVAROJKZ7gGGY6i4U-y8NPra4Hv044ZWWmpzvK186Kb7fiZkgdDnnY";

class PlayListManager {

    constructor() {

    }

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
            console.log(response.body);
        });
    }
}

