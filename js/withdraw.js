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


    // get totallBalance:
    const totallBalanceDisplay = document.getElementById("balance-amount");
    const totallBalance = parseFloat(totallBalanceDisplay.innerText);

    if(withdrawAmount>totallBalance){
        alert("You Don't have that Much Money!!!");
        return;
    }
    
    // withdraw amount totall:
    const TotallwithdrawAmount = withdrawAmount + withdrawAmountDis;
    // set withdraw amount:
    withdrawDisplayAmount.innerText = TotallwithdrawAmount;


    // set Totall balance after withdraw:
    const totallBalanceAfterWithdraw = totallBalance - withdrawAmount;
    totallBalanceDisplay.innerText = totallBalanceAfterWithdraw;

});