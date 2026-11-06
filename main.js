//calc orpeation will have three variables operator number and nubmer

let x = "";

let y = "";

let op = "";

const display = document.querySelector("#display");

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

//add more functionality this is the basic jist though
function equal(){
    display.textContent = x;

    x = "";
    y = "";
    op = "";
}

function opreate(x,operator,y){
    if(operator === "+"){
        return add(x,y);
    }
    else if(operator === "-"){
        return subtract(x,y);
    }
    else if(operator === "*"){
        return multiply(x,y);
    }
    else if(operator === "/"){
        return divide(x,y);
    }
    else if(operator === "="){
        return equal();
    }
}
//add logic to update y only after a opreator is pressed if three opreators are press like 12 + 6 - 2; them 12 + 6 = 18 and update x then - 2 will update y;
function udpateX(){
    let num = document.addEventListener(".numbers");
    num.addEventListener("click", (e) => {
        //need to make sure that we only append 0 after a number for example 005 should just be 5 but 10 is valid
        if(e.target.matches("#0")){
            if (x !== ""){
                x += 0
            }
        }
        else if(e.target.matches("#1")){
            x +=  "1";
        }
        else if(e.target.matches("#2")){
            x += "2";
        }
        else if(e.target.mathces("#3")){
            x += "3";
        }
        else if(e.target.mathces("#4")){
            x += "4";
        }
        else if(e.target.matches("#5")){
            x += "5";
        }
        else if(e.target.matches("#6")){
            x += "6";
        }
        else if(e.target.matches("#7")){
            x += "7";
        }
        else if(e.target.matches("#8")){
            x += "8";
        }
        else if(e.target.matches("#9")){
            x += "9";
        }
    });
}
//add logic to update y only after a opreator is pressed if three opreators are press like 12 + 6 - 2; them 12 + 6 = 18 and update x then - 2 will update y;
function updateY(){
    const opreators = document.addEventListener("opreators");
    const num = document.addEventListener(".numbers");
    num.addEventListener("click", (e) => {
        //need to make sure that we only append 0 after a number for example 005 should just be 5 but 10 is valid
        if(e.target.matches("#0")){
            if(y !== ""){
                y += "0";
            }
        }
        else if(e.target.matches("#1")){
            y +=  "1";
        }
        else if(e.target.matches("#2")){
            y += "2";
        }
        else if(e.target.mathces("#3")){
            y += "3";
        }
        else if(e.target.mathces("#4")){
            y += "4";
        }
        else if(e.target.matches("#5")){
            y += "5";
        }
        else if(e.target.matches("#6")){
            y += "6";
        }
        else if(e.target.matches("#7")){
            y += "7";
        }
        else if(e.target.matches("#8")){
            y += "8";
        }
        else if(e.target.matches("#9")){
            y += "9";
        }
    });
}

//when a number is pressed update x the display to reflect that number when a opreator is pressed update the display to reflect y
function updateDisplay(){
    const opreator = document.querySelector(".opreator");
    const num = document.querySelector(".numbers");
    num.addEventListener("click", () => {
        if(){

        }
    });
}

function main(){
        udpateX();
        updateY();
        updateDisplay();
}

main();

