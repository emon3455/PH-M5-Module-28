document.getElementById("withdraw-btn").addEventListener("click" , function(){

    // get withdraw amount
    const withdrawAmountInput = document.getElementById("withdraw-input");
    const withdrawAmount = parseFloat(withdrawAmountInput.value);

    // check input
    if(isNaN(withdrawAmount)){
        alert("Please Enter valid input");
        return;
    }

    // clear input field:
    withdrawAmountInput.value = "";

    // get withdraw display amount:
    const withdrawDisplayAmount = document.getElementById("withdraw-amount");
    const withdrawAmountDis = parseFloat(withdrawDisplayAmount.innerText);

    // withdraw amount totall:
    const TotallwithdrawAmount = withdrawAmount + withdrawAmountDis;

    // set withdraw amount:
    withdrawDisplayAmount.innerText = TotallwithdrawAmount;

});