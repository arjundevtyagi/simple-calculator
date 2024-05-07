// CALCULATOR CODE

// select display element

const display = document.getElementById("display");

let btns = document.querySelectorAll("button");




function seeOnDisplay(input){
    display.value += input;

}

function clearrr(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        console.log("There is an Error");
        display.value = "ERROR!"
    }
    

}