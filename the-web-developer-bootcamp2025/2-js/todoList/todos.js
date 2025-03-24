/* ===============================================================================
Filename:        app.css
Date Created:    2025-03-13
Author:          Li Yang

Purpose:
    This JavaScript program allows the user to manage a todo list. 
    It provides the following functionality:
    - List the current todos
    - Add new todos
    - Delete todos by specifying their index in the list
    - Quit the application

Technologies and Methods:
    - JavaScript prompt() for user input
    - Array methods like push() and splice() to modify the todo list
    - Basic loop control to manage application flow
===============================================================================*/
let input;
const todos = ["Go to CIT", "Taking ENSA class"];
while (true) {
  input = prompt("what would you like to do?").trim().toLowerCase();

  if (input === "quit" || input === "q") {
    console.log("Ok, QUIT the APP!");
  }

  if (input === "list") {
    console.log("*****");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}:${todos[i]}`);
    }
  }
  if (input === "new") {
    let newTodo = prompt("Enter a new todo list:");
    todos.push(newTodo);

    console.log(`”${newTodo}" added to the todo list`);
    //   break;
  }
  if (input === "delete") {
    let deleteIndex = parseInt(
      prompt("Please enter the number you want to delete:")
    );
    if (!isNaN(deleteIndex) && deleteIndex >= 0 && deleteIndex < todos.length) {
      let deleteTodo = todos.splice(deleteIndex, 1);
      console.log(`"${deleteTodo[0]}" has been deleted.`);
    } else {
      console.log("Invalid index. Please enter a valid number.");
    }
  }

  //   break;
}
