Template.taskItem.helpers({
    submittedFormatted: function() {
        if (this.submitted)
            return new Date(this.submitted);
        return "<no date>";
    },
    ownTask: function() {
        return this.userId == Meteor.userId();
    }
});