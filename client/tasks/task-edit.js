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
                return alert(error.reason);

            Router.go('taskPage', {_id: id});
        });
    },
    'click .delete': function(e) {
        e.preventDefault();

        if (confirm("Delete this task?")) {
            var id = this._id;
            Tasks.remove(id);
            Router.go('tasksList');
        }
    }
});