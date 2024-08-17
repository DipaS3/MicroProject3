let input=document.getElementById('.display');
let button=document.querySelectorAll('.btn');
let equalbtn=document.querySelector('#equal');
let del=document.querySelector('#del');

let string=" ";

let btns=Array.from(button);
btns.forEach(btn => {
    btn.addEventListener('click',(e) =>{

       if(e.target.innerHTML == '='){
        let isValid = validateInput(string);
        if(isValid){
            try{
            string=eval(string);
            document.querySelector('input').value=string;
            }
            catch{
                document.querySelector('input').value="Error";
                string="";
            }
          }
          else{
            alert("Please do not enter two operators at once.")
          }
          }
        else if (e.target.innerHTML == 'RESET')
        {
            string="";
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML == 'DEL')
        {   
          string = string.toString()
            string.length > 0 ? string=string.slice(0,string.length-1) : string="0"
            document.querySelector('input').value=string;
        }
       
        else{
            
            string+= e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})

equalbtn.addEventListener('click' ,() =>{
    try {
        string = eval(string);
    
        if (String(string).includes(".")) {
          string = parseFloat(string).toFixed(2);
        }
      document.querySelector('input').value=string;
      } catch (error) {
        alert("Invalid expression. Please check your input and try again.");
        string = "";
        document.querySelector('input').value=string;
      }
})

function validateInput(input) {
    // Define the list of operators
    const operators = new Set(['+', '-', '*', '/']);
    
    // Check if the input string is at least two characters long
    if (input.length < 2) {
        return true; // Not enough characters to be invalid
    }
    
    // Extract the last two characters
    const lastChar = input.slice(-1);
    const secondLastChar = input.slice(-2, -1);
    
    // Check if both the last and second last characters are operators
    if (operators.has(lastChar) && operators.has(secondLastChar)) {
        return false; // Return false indicating an error
    }
    
    return true; // Input is valid
}

//Example usage:
const userInput = '23+4*';
const isValid = validateInput(userInput);

if (!isValid) {
    console.error('Error: The last two characters are both operators.');
} else {
    console.log('Input is valid.');
}


