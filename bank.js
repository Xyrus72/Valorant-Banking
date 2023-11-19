//submit button ar kaj 

document.getElementById('btn-submit').addEventListener('click',function(){

const emailField=document.getElementById('user-email');
const email=emailField.value; 



const passField=document.getElementById('user-password');
const pass=passField.value;


if (email==='kotitaka@gmail.com' && pass==='pocket-khali' ){
    console.log('Valid User')

}
else{
    console.log('Invalid User')
}
})