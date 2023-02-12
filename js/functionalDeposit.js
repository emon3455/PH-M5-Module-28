document.getElementById("deposit-btn").addEventListener("click", function(){

    const NewdepositAmount = getInputValueByID("deposit-input");
    const OldDepositAmount = getElementValueByID("deposit-amount");

    const totallDepositAmount = NewdepositAmount + OldDepositAmount;

    setElementValueByID("deposit-amount" , totallDepositAmount);

    const oldBalance = getElementValueByID("balance-amount");
    const newBalance = oldBalance + NewdepositAmount;
    setElementValueByID("balance-amount",newBalance);

});