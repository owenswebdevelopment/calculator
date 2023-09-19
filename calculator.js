//get the classes from the html document//

const keys = document.querySelectorAll('.key');
const display_Input = document.querySelector('.display .input');
const display_Output = document.querySelector('.display .output');

let input = "";

for (let key of keys){
  const value = key.dataset.key;

  key.addEventListener('click', () => {
    if (value == "clear"){
      input = "";
      display_Input.innerHTML = "";
      display_Output.innerHTML = "";
    }
    else if (value == "backspace"){
      input = input.slice(0, -1);
      display_Input.innerHTML = cleanInput(input);
    }
    else if ( value == "="){
      let result = eval(input);
     display_Output.innerHTML = result;
    }
    else if (value == "brackets"){
      if (
        
        input.indexOf("(") == -1 ||
        input.indexOf("(") != -1 &&
        input.indexOf(")") == -1 &&
        input.lastIndexOf("(") < input.lastIndexOf(")")
      ){
        input += "("
      } 
      else if (
        input.indexOf("(") != -1 &&
        input.indexOf(")") == -1 ||
        input.indexOf("(") != -1 &&
        input.indexOf(")") != -1 &&
        input.lastIndexOf(")") < input.lastIndexOf(")")
      ){
        input += ")"
      }

      display_Input.innerHTML = cleanInput(input);
    }
else {
  input += value;
  display_Input.innerHTML = input;
}
      
  })
}



function cleanInput(input){
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++){
    console.log(input_array[i]); 
    if (input_array[i] == "*"){
    input_array[i] = ` <span class="operator">x</span> `;
  }
  else if(input_array[i] == "/"){
    input_array[i] = ` <span class="operator">÷</span>`;
  }
  else if(input_array[i] == "+"){
    input_array[i] = ` <span class="operator">+</span>`;
  }
  
  else if(input_array[i] == "-"){
    input_array[i] = ` <span class="operator">-</span>`;
  }

  else if(input_array[i] == "="){
    input_array[i] = ` <span class="operator">=</span>`;
  }
  else if (input_array[i] == "%") {
    input_array[i] = `<span class="percent">%</span>`;
} 
}
return input_array.join = ("");
}

  






