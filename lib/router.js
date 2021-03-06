Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('tasks'); }
});

Router.map(function() {
    this.route('tasksList', {path: '/'});

    this.route('taskPage', {
        path: '/tasks/:_id',
        data: function() {
            return Tasks.findOne(this.params._id);
        }
    });

    this.route('taskSubmit', {
        path: '/submit'
    });

    this.route('taskEdit', {
        path: '/tasks/:_id/edit',
        data: function() {
            return Tasks.findOne(this.params._id);
        }
    });
});

var requireLogin = function(pause) {
    if (!Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');

        pause();
    }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'taskSubmit'})
Router.onBeforeAction(function() {Messages.clearSeen()});
