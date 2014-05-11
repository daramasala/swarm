Package.describe({
    summary: "A pattern to display error messages to the user"
});

Package.on_use(function (api, where){
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

    api.add_files(['errors.js', 'errors-list.html', 'errors-list.js'], 'client');

    if (api.export)
        api.export('Errors');
});