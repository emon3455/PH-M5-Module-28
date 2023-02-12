document.getElementById("withdraw-btn").addEventListener("click", function(){

    const newWithdrawAmount = getInputValueByID("withdraw-input");
    const oldWithdrawAmount = getElementValueByID("withdraw-amount");
    const withdrawAmount = newWithdrawAmount + oldWithdrawAmount;

    setElementValueByID("withdraw-amount",withdrawAmount);

    const oldBalance = getElementValueByID("balance-amount");
    const newBalance = oldBalance - newWithdrawAmount;
    setElementValueByID("balance-amount", newBalance); 

});