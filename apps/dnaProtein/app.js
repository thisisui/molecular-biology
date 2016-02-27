var Datastore = require('nedb')
    , db = new Datastore({ filename: 'liveLogger', autoload: true })
    , dnaCreator = require('./partials/dna.js')
    , translation = require('./partials/translation.js')
    , transcription = require('./partials/transcription.js');

(function createProtein() {
    var protein = translation(transcription(dnaCreator()));
    
    db.insert({
        protein: protein
    }, function(err, newDoc){
        createProtein();
    });
    
})();