Package.describe({
    summary: "A pattern to display messages to the user"
});

Package.on_use(function (api, where){
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

    api.add_files(['messages.js', 'message-list.html', 'message-list.js'], 'client');

    if (api.export)
        api.export('Messages');
});