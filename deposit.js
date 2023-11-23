document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField=document.getElementById('deposit-field');
    const NewdepositAmount=depositField.value;
    const Amount=parseFloat(NewdepositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const deposit=depositTotal.innerText; //aita inner text thakbe


    const mount=parseFloat(deposit);
    const currDepositTotal= Amount + mount;

    depositTotal.innerText=currDepositTotal;




    const FinalTotal=document.getElementById('balance-total');
    const stringg= FinalTotal.innerText;
    const inti=parseFloat(stringg);

    const newbalance=inti + Amount;
    FinalTotal.innerText=newbalance;
    depositField.value = "";

});


document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const collectValue = withdrawField.value;
    const wdAmount = parseFloat(collectValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const wbAmount = parseFloat(withdrawText) || 0; // Default to 0 if not a valid number

    const FinalTotal = document.getElementById('balance-total');
    const stringg = FinalTotal.innerText;
    const inti = parseFloat(stringg);

    if (inti >= wdAmount) {
        const calcu = wdAmount + wbAmount;
        withdrawTotal.innerText = calcu;
        const newBalance = inti - wdAmount;
        FinalTotal.innerText = newBalance;

        withdrawField.value = '';
    } else {
        alert(`You can't withdraw more than ${stringg}`);
    }
});




