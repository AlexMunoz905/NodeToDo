// ToDo list

console.log("add | Add a item to the list")
console.log("delete | Delete a item from the list")
console.log("view | View all the list items")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What function do you want to perform? ', (answer) => {
  var ToDo = []

  if (answer=="add"){
      const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   r1.question('What do I add? ', (addTo) => {
     if(addTo = "" | addTo == null) {
       console.log("ERR")
     } else {
       ToDo = addTo;
       console.log(ToDo)
     }
   });
  } else {
    console.log("ERR")
  }
  if(answer == "delete"){
    console.log("You choose delete");
  }else {
    console.log("ERR")
  }
  if(answer == "view"){
    console.log("You choose view")
  }else {
    console.log("ERR")
  }
  rl.close();
});
