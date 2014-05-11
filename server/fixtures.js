if (Tasks.find().count() === 0) {
    Tasks.insert({
        title: "As a user I want to create new tasks so I can keep a backlog of what needs to be done",
        contributions: [
            {
                description: "dara created the task",
                quantity: 100
            }
        ]
    });
    Tasks.insert({
        title: "As a user I want to track my and others' contribution to tasks",
        contributions: [
            {
                description: "dara created the task",
                quantity: 100
            }
        ]
    });
    Tasks.insert({
        title: "As a user I want to see recent contributions in my tasks",
        contributions: [
            {
                description: "dara created the task",
                quantity: 100
            }
        ]
    });

}