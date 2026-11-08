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
    if(y === 0){
        return "Error";
    }
    return x/y;
}


function equal(){
    display.textContent = x;

    x = "0";
    y = "0";
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

    if(retval === "Error"){
        return "Error";
    }

    else{
        return Number(retval.toFixed(2));
    }
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
            if (x === "0"){
                x = digit;
            }
            else{
                x += digit;
            }
        }
        else{
            if (y === "0"){
                y = digit;
            }
            else{
                y += digit;
            }
        }
        updateDisplay();
    });
}

function keyboardSupport(){
    document.addEventListener("keydown", (e) => {
        const key = e.key;
        if(/^[0-9]$/.test(key)){
            document.getElementById(key).click();
        }
        else if(["+","-","*","/"].includes(key)){
            document.getElementById(key).click();
        }
        else if (key === "Enter" || key === "="){
            e.preventDefault();
            document.getElementById("=").click();
        }
        else if (key === "Backspace"){
            e.preventDefault();
            document.getElementById("clear").click();
        }
        else if(key === "Escape"){
            document.getElementById("clear-all").click();
        }
        else if(key === "."){
            document.getElementById("decimal").click();
        }
    });
}

//when a number is pressed update x the display to reflect that number when a opreator is pressed update the display to reflect y; temp for testing
function updateDisplay(){
        if(opCounter === 0){
            display.textContent = x || "0";
    }
    else{
        display.textContent = y || "0";
    }
}

function clearInput(){
    if(opCounter === 1){
        y = "";
    }
    else if (opCounter == 0){
        x = "";
    }
    updateDisplay();
}

function clearAll(){
    x = "";
    y = "";
    op = "";
    opCounter = 0;
    display.textContent = "0";
}

function decimalPt(){
    if (opCounter === 0 && !x.includes(".")){
        x = x === "" ? "0." : x + ".";
    }
    else if(opCounter === 1 && !y.includes(".")){
        y = y === "" ? "0." : y + ".";
    }
    updateDisplay();
}

function decimalUpdate(){
    const decimalBtn = document.querySelector("#decimal");
    decimalBtn.addEventListener("click",decimalPt);
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

            if(x === "Error"){
                clearAll();
                display.textContent = "Error";
                return;
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
            if(x === "Error"){
                clearAll();
                display.textContent = "Error";
                return;
            }
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
    decimalUpdate();
    keyboardSupport();
}

main();




