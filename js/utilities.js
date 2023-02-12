function getInputValueByID(inputFieldID){

    const inputValueString = document.getElementById(inputFieldID);
    const inputvalue = parseFloat(inputValueString.value);

    // clear input field:
    inputValueString.value = "";

    return inputvalue;
}

function getElementValueByID(elementID){
    const elementValueString = document.getElementById(elementID);
    const elementValue = parseFloat(elementValueString.innerText);
    return elementValue;
}

function setElementValueByID(elementID , newValue){
    const element = document.getElementById(elementID);
    element.innerText = newValue;
}