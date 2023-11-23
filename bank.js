//submit button ar kaj 

document.getElementById('btn-submit').addEventListener('click',function(){

const emailField=document.getElementById('user-email');
const email=emailField.value; 



const passField=document.getElementById('user-password');
const pass=passField.value;


if (email==='AmiKoreanJett' && pass==='khali ult pari na' ){
    window.location.href='http://127.0.0.1:5500/inside.html'

}
else{
    alert('Trash give correct email and password')
}
})