const codes = document.querySelector('#pass1');
const confirmpass = document.querySelector('#pass2');
const submitbtn = document.querySelector('#btn');
const alerttext = document.querySelector('alert .line-3');
const alerttext2 = document.querySelector('alert .hide');

document.querySelector('.show-pass input').addEventListener("click", showPass);

function showPass() {


  if (codes.type === "password" || confirmpass.type === "password") {
    codes.type = "text";
    confirmpass.type = "text";

  }
  else if (codes.type === "text" || confirmpass.type === "text") {
    codes.type = "password";
    confirmpass.type = "password";
  }
}

submitbtn.addEventListener("click", () => {
  // if(codes.value == confirmpass.value){
  //     alerttext.style.display = "block";
  //     alerttext2.style.display = "none";
  // }
  // else
  // {
  //     alerttext.style.display = "none";
  //     alerttext2.style.display = "block";
  // }
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  if (pass1 === pass2) {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', pass1);
  } else {
    alert('password does not match');
  }
  // console.log(firstName);
});

//login form


const loginBtn = document.querySelector('#loginBtn');



loginBtn.addEventListener("click", () => {


    var localemail = localStorage.getItem('userName');
    var localpass = localStorage.getItem('password');



    var formEmail = document.getElementById('email').value;
    var formpass = document.getElementById('password').value;

    if (formpass == localpass && formEmail == localemail) {
        alert('login happen')
    }
});
