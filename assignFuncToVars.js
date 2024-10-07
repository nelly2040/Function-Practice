function checkTaskStatus(taskName, isCompleted){
    if(isCompleted){
        console.log(`\nTask ${taskName} is completed`);
    }else{
        console.log(`\nTask ${taskName} is not completed`);
    }
}

let taskName= "Cleaned dishes";
//let isCompleted= true;
let isCompleted= false;
let taskLogger= checkTaskStatus(taskName, isCompleted);
taskLogger;
