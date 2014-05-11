Tasks = new Meteor.Collection('tasks');

Tasks.allow({
    update: ownsDocument,
    remove: ownsDocument
});

Tasks.deny({
    update: function(userId, task, fieldNames) {
        return (_.without(fieldNames, 'title', 'description').length > 0);
    }
});

Meteor.methods({
    newTask: function(taskAttributes) {
        var user = Meteor.user();

        if (!user)
            throw new Meteor.Error(401, "You need to login to create new tasks");

        if (!taskAttributes.title)
            throw new Meteor.Error(402, "Please fill in a title");

        var task = _.extend(_.pick(taskAttributes, 'title', 'description'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        var taskId = Tasks.insert(task);

        return taskId;
    }
});