let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.value == "C") {
      string = "";
      display.value = string;
    } else {
      string += e.target.value;
      display.value = string;
    }
  });
});
