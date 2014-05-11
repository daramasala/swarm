Messages = {
    collection: new Meteor.Collection(null),

    // use the following types: error, warning, success, info
    add: function(message, type) {
        Messages.collection.insert({message: message, type: type, seen: false});
    },

    clearSeen: function() {
        Messages.collection.remove({seen: true});
    }
}

