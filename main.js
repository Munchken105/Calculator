//calc orpeation will have three variables operator number and nubmer

let x = "";

let y = "";

let op = "";

let opCounter = 0;

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
    opCounter = 0;
}

function opreate(x,operator,y){
    let retval;
    if(operator === "+"){
        retval = add(x,y);
    }
    else if(operator === "-"){
        retval = subtract(x,y);
    }
    else if(operator === "*"){
        retval = multiply(x,y);
    }
    else if(operator === "/"){
        retval = divide(x,y);
    }
    return retval;
}




//add logic to update y only after a opreator is pressed if three opreators are press like 12 + 6 - 2; them 12 + 6 = 18 and update x then - 2 will update y;
// maybe i can combine the functions have a if statment in the event listner if the op counter is 0 than its x and if its 1 its y than if opCounter = 2 than we do the orpreation and store the value in x so we can use y next
function udpateNums(){
    let num = document.querySelector(".numbers");
    num.addEventListener("click", (e) => {
        const digit = e.target.id;

        if(!/^[0-9]$/.test(digit)){
            return;
        }

        if(opCounter === 0){
            if(digit !== "0" || x !== ""){
                x += digit;
            }
        }
        else{
            if(digit !== "0" || y !== ""){
                y += digit;
            }
        }
        updateDisplay();
    });
}

//when a number is pressed update x the display to reflect that number when a opreator is pressed update the display to reflect y; temp for testing
function updateDisplay(){
    const display = document.querySelector("#display");
        if(opCounter === 0){
            display.textContent = x;
    }
    else{
        display.textContent = y;
    }
}

function clearInput(){
    if(opCounter === 1){
        y = "";
    }
    else if (opCounter == 0){
        x = "";
    }
    display.textContent = 0;
}

function clearAll(){
    x = "";
    y = "";
    op = "";
    opCounter = 0;
    display.textContent = "0";
}

function clearInputUpdate(){
    const clearBtn = document.querySelector("#clear");
    const clearAllBtn = document.querySelector("#clear-all");
    
    clearBtn.addEventListener("click",clearInput);
    clearAllBtn.addEventListener("click",clearAll);
}

function updateOperator(){
    const operators = document.querySelector(".operators");

    operators.addEventListener("click", (e) => {
        if(!e.target.classList.contains("operator")){
            return;
        }

        const selectedOpreator = e.target.id;

        if(selectedOpreator === "="){
            if(op !== "" && y !== ""){
                x = String(opreate(Number(x),op,Number(y)));
            }
            equal();
            return;
        }
        else if(opCounter === 0){
            op = selectedOpreator
            opCounter = 1;
        }

        else if(opCounter === 1 && y !== ""){
            x = String(opreate(Number(x),op,Number(y)));
            y = "";
            op = selectedOpreator;
            opCounter = 1;
            display.textContent = x;
        }
        else{
            op = selectedOpreator;
        }
    });
}

function main(){
    udpateNums();
    updateOperator();
    clearInputUpdate();
}

main();




