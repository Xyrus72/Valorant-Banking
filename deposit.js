document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField=document.getElementById('deposit-field');
    const depositAmount=depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    const deposit=depositTotal.innerText; //aita inner text thakbe
    depositTotal.innerText=depositAmount


})