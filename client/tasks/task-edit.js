Template.taskEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var id = this._id;

        var task = {
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val()
        }

        Tasks.update(id, {$set: task}, function(error) {
            if (error)
                return Messages.add(error.reason, 'error');
            Messages.add("Task '" + task.title + "' updated", "success")
            Router.go('taskPage', {_id: id});
        });
    },
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this task?")) {
            var id = this._id;
            var title = $(e.target).find('[name=title]').val();
            Tasks.remove(id);
            Messages.add("Task '" + title + "' deleted", "warning");
            Router.go('tasksList');
        }
    }
});