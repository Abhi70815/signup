document.querySelector('form').addEventListener('submit', ()=>{
  
let password = document.getElementById('password').value;
let cpassword = document.getElementById('cpassword').value;
if(password.length<8 && cpassword.length<8 || password!==cpassword){
alert("password lenght should to greater than 8 digit or password and conform passwod should be same");

}else{
alert("submit Successful");
}
})
