#!/usr/bin/env node
import inquirer from "inquirer";

let toDoList : string []= []
let conditions = true;

let main = async () => {
  while(conditions){
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do:",
        choices: ["addTask", "deleteTask","updateTask", "viewTodoList", "Exit"]
      }
   ])
   if(option.choice === "addTask"){
    await addTask()
   }
   else if(option.choice === "deleteTask"){
    await deleteTask()
   }
   else if(option.choice === "updateTask"){
    await updateTask()
   }
   else if(option.choice === "viewTodoList"){
    await viewTask()
   }
   else if (option.choice ===  "Exit")
   conditions = false;
   
  }
}

let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new Task:"
    }
  ]);
  toDoList.push(newTask.task)
  console.log(`\n ${newTask.task} task added successfully in Todo-List!`)
}

let viewTask = async () => {
  console.log(`\n Your to-do list \n`)
  toDoList.forEach((task, index) =>{
    console.log(`${index}: ${task}`)

  })
}

let deleteTask = async ()=> {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index.no' of the task you want to delete:"

    }
  ])
  let deleteTask = toDoList.splice(taskIndex.index, 1)
  console.log( `\n ${deleteTask} this task has been deleted successfully from your ToDo-List`)
};

let updateTask = async () =>{
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter 'index no' of the task you want to update: "
    },
    {
      name :"new_task",
      type:"input",
      message: "Now Enter the new task name:"
    }
  ]);
  toDoList[update_task_index.index] = update_task_index.new_task
  console.log(`\n Task at index no ${update_task_index.index} Updated successfully [for updated list check option: viewTodoList]`);

}

main();
