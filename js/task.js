function getInputValueByID(inputID){
    const newNumber = document.getElementById(inputID);
    const number = parseFloat(newNumber.value);

    newNumber.value = "";

    return number;
}

function getElementValueByID(elementID){
    const newElementValue = document.getElementById(elementID);
    const elementValue = parseFloat(newElementValue.innerText);

    return elementValue;
}

function setElementValueByID(elementID , elementValue){

    const element = document.getElementById(elementID);
    element.innerText = elementValue;

}

// for square:
document.getElementById("square-btn").addEventListener("click" , function(){

    const inputNumber = getInputValueByID("input");

    if(isNaN(inputNumber)){
        alert("Please Enter a Valid Input");
        return;
    }
    
    const sqr = inputNumber * inputNumber;

    setElementValueByID("square",sqr);

});

// for cube
document.getElementById("cube-btn").addEventListener("click" , function(){

    const input = getInputValueByID("input");
    if(isNaN(input)){
        alert("Please Enter a Valid Input");
        return;
    }
    const cube = input * input * input;

    setElementValueByID("cube",cube);

});
