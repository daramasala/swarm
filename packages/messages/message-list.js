Template.meteorMessages.helpers({
    messages: function() {
        return Messages.collection.find();
    }
});

Template.meteorMessage.rendered = function() {
    var message = this.data;
    Meteor.defer(function() {
        Messages.collection.update(message._id, {$set: {seen: true}});
    });
};