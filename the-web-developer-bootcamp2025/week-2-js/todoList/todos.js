let input;
const todos = ["Go to CIT", "Taking ENSA class"];
while (true) {
  input = prompt("what would you like to do?");

  if (input === "quit" || input === "q") {
    console.log("Ok, QUIT the APP!");
    break; // Exit the loop
  }

  if (input === "list") {
    console.log("*****");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}:${todos[i]}`);
    }
  }
}
