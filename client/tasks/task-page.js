Template.taskPage.helpers({
    ownTask: function() {
        return this.userId == Meteor.userId();
    }
});