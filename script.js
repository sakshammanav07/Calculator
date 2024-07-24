let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let numberString = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      numberString = eval(numberString); // evaluate the numberString
      if (numberString === undefined) {
        numberString = "";
      }
      display.value = numberString; // displaying the result
    } else if (e.target.value === "C") {
      numberString = ""; //empty the string
      display.value = numberString;
    } else {
      numberString += e.target.value;
      display.value = numberString;
    }
  });
});
