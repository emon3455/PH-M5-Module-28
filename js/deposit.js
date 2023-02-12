document.getElementById("deposit-btn").addEventListener("click" , function(){

    // get deposit amount
    const depositAmountInput = document.getElementById("deposit-input");
    const depositAmount = parseFloat(depositAmountInput.value);

    // check input
    if(isNaN(depositAmount)){
        alert("Please Enter valid input");
        return;
    }

    // empty input field
    depositAmountInput.value="";

    // get display amount
    const totalDepositAmountDisplay = document.getElementById("deposit-amount");
    const depositAmountDisplay = parseFloat(totalDepositAmountDisplay.innerText);

    // set totall display amount
    const totalDepositAmount = depositAmount + depositAmountDisplay;
    totalDepositAmountDisplay.innerText = totalDepositAmount;


    // get balance amount:
    


});