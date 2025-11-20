const todoList = [
  {
    task: "Complete Project",
    subtasks: [
      {
        task: "Write Code",
        subtasks: [
          { task: "Implement Feature A" },
          { task: "Test Feature A" },
          { task: "Refactor Code" },
        ],
      },
      {
        task: "Document Project",
        subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
      },
    ],
  },
  {
    task: "Prepare Presentation",
    subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
  },
];

function showItem(task) {
    console.log('Name: ', task.name, '-- ', task.subtasks);
}

function showAllTasks(list) {

  for(const task of list) {
    showItem(task);
    if (task.subtasks) {
      showAllTasks(task.subtasks)
    }
  }
}

showAllTasks(todoList)