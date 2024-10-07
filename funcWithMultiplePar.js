function calculate(num1, num2, operation){
    switch(operation){
       case "add":
            console.log(num1 + num2);
            break;

        case "subtract":
            console.log(num1 - num2);
            break;

        case "multiply":
            console.log(num1 * num2);
            break;

        case "divide":
            console.log(num1 / num2);
            break;

        default:
            console.log("Invalid function arguments!!");
            break;
    }
}

calculate(10, 5, "add");
calculate(10, 5, "subtract");
calculate(10, 5, "multiply");
calculate(10, 5, "divide");
