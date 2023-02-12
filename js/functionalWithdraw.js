document.getElementById("withdraw-btn").addEventListener("click", function(){

    const newWithdrawAmount = getInputValueByID("withdraw-input");

    if(isNaN(newWithdrawAmount)){
        alert("Please Enter a Valid Input");
        return;
    }

    const oldWithdrawAmount = getElementValueByID("withdraw-amount");
    const oldBalance = getElementValueByID("balance-amount");

    if(newWithdrawAmount > oldBalance){
        alert("You Don't Have that much money");
        return;
    }

    const withdrawAmount = newWithdrawAmount + oldWithdrawAmount;

    setElementValueByID("withdraw-amount",withdrawAmount);

    
    const newBalance = oldBalance - newWithdrawAmount;
    setElementValueByID("balance-amount", newBalance); 

});