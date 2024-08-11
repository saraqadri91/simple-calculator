// calculator program
var value = ""
var isOn = true; 

function getNumber(element) {
    if (!isOn) return;
    var elemetvalue = element.innerText;

    
    var lastChar = value.slice(-1);
    if (["+", "-", "*", "/", "."].includes(elemetvalue) && ["+", "-", "*", "/", "."].includes(lastChar)) {
        return; 
    }

    value += elemetvalue;
    document.getElementById("data").value = value;
}

function clearDisplay(){
value=""
document.getElementById("data").value= value;
}
function calculate(){
   try {
    document.getElementById("data").value= eval(document.getElementById("data").value)
   } catch (error) {
    document.getElementById("data").value = "Error";
        value = ""; 
   }
}
function del(){
    value = value.slice(0,-1)
    document.getElementById("data").value=value;
    
}
function togglePower() {
    var calculator = document.querySelector('.child'); // Select the calculator element
    isOn = !isOn; // Toggle the state

    if (isOn) {
        calculator.classList.remove('hidden'); // Show the calculator
        document.querySelector('.sp').style.background = '#6a1b9a'; // Set button color to ON state
    } else {
        calculator.classList.add('hidden'); // Hide the calculator
        document.querySelector('.sp').style.background = '#b0bec5'; // Set button color to OFF state
    }
}
function updateDateTime() {
    var now = new Date(); 
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString(); 


    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
}


updateDateTime();
setInterval(updateDateTime, 1000);
