function doOp() {
    let firstNum = Number(prompt("Please enter the first number", ""));
    let secondNum = Number(prompt("Please enter the second number", ""));
    let operator = prompt("Please enter the operator", "");
    let result = 0;

    switch (operator) {
        case "+":
            result = firstNum + secondNum
            break;
        case "-":
            result = firstNum - secondNum
            break;
        case "*":
            result = firstNum * secondNum
            break;
        case "/":
            result = firstNum / secondNum
            break;
        default:
            alert("Please enter a valid operator (+-*/)")
            break;
    }

    document.getElementById("input").innerHTML = "Input : " + firstNum + "," + secondNum + "," + operator;
    document.getElementById("output").innerHTML = "Output : " + firstNum + " " + operator + " " + secondNum + " = " + result;
  }