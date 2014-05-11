Template.taskSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var task = {
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val()
        }

        // task._id = Tasks.insert(task);

        Meteor.call('newTask', task, function(error, id) {
            if (error) {
                throwError(error.reason);

                if (error.error === 302)
                    Router.go('taskPage', {_id: error.details});
            } else {
                Router.go('taskPage', {_id: id});
            }
        });
    }
});