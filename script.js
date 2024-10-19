const tasks = [];

function taskManager() {
  let running = true;
  while (running) {
    const command = prompt(`Enter a number for your task
        1. Add
        2. View
        3. Update
        4. Delete
        5. Toggle Completion Status
        6. Search
        7. Exit
        `);
    switch (command) {
      case "1":
        const description = prompt("Enter the task description:");
        tasks.push({ description, completed: false });
        alert(`Task added: ${description}`);
        break;

      case "2":
        if (tasks.length === 0) {
          alert("No tasks available.");
        } else {
          let taskList = "Tasks:\n";
          tasks.forEach((task, index) => {
            taskList += `${index + 1}: ${task.description} [${
              task.completed ? "Completed" : "Not Completed"
            }]\n`;
          });
          alert(taskList);
        }
        break;

      case "3":
        const updateIndex = parseInt(
          prompt("Enter the task number to update:")
        );
        if (tasks[updateIndex - 1]) {
          const newDescription = prompt("Enter the new task description:");
          tasks[updateIndex - 1].description = newDescription;
          alert(`Task ${updateIndex} updated to: ${newDescription}`);
        } else {
          alert(`Task ${updateIndex} not found.`);
        }
        break;

      case "4":
        const deleteIndex = parseInt(
          prompt("Enter the task number to delete:")
        );
        if (tasks[deleteIndex - 1]) {
          const removedTask = tasks.splice(deleteIndex - 1, 1);
          alert(`Task deleted: ${removedTask[0].description}`);
        } else {
          alert(`Task ${deleteIndex} not found.`);
        }
        break;

      case "5":
        const toggleIndex = parseInt(
          prompt("Enter the task number to toggle completion:")
        );
        if (tasks[toggleIndex - 1]) {
          tasks[toggleIndex - 1].completed = !tasks[toggleIndex - 1].completed;
          alert(
            `Task ${toggleIndex} is now ${
              tasks[toggleIndex - 1].completed ? "Completed" : "Not Completed"
            }.`
          );
        } else {
          alert(`Task ${toggleIndex} not found.`);
        }
        break;

      case "6":
        const searchTerm = prompt("Enter the task description to search for:");
        const foundTasks = tasks.filter((task) =>
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (foundTasks.length > 0) {
          let searchResults = "Search Results:\n";
          foundTasks.forEach((task, index) => {
            searchResults += `${index + 1}: ${task.description} [${
              task.completed ? "Completed" : "Not Completed"
            }]\n`;
          });
          alert(searchResults);
        } else {
          alert("No tasks found matching your search.");
        }
        break;

      case "7":
        running = false;
        alert("Exiting Task Manager.");
        break;

      default:
        alert(`Invalid command. Please use :
                1. Add
                2. View
                3. Update
                4. Delete
                5. Toggle Completion Status
                6. Search
                7. Exit
                `);
    }
  }
}

taskManager();
