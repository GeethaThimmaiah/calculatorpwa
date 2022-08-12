let calculator_input1 = document.getElementById("calculator_input_Number");
let calculator_input_Number_textarea_V = document.getElementById(
  "calculator_input_Number_textarea"
);

let calculator_AC = document.getElementById("Calculator_input_AC");

let DisplayValue;

function display(DisplayValue) {
  calculator_input1.value += DisplayValue;
}

calculator_AC.addEventListener("click", () => {
  calculator_input1.value = "";
  calculator_input_Number_textarea_V.value = "";
});

function displaySolve() {
  let output = calculator_input1.value;

  calculator_input_Number_textarea_V.value = output;

  let result = eval(output);

  calculator_input1.value = result;
}


function inverse(){
  calculator_input1.value= calculator_input1.value * -1;
}