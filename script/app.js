const codes = document.querySelector('#pass1');
const confirmpass = document.querySelector('#pass2');
const submitbtn = document.querySelector('#btn');
const alerttext = document.querySelector('alert .line-3');
const alerttext2 = document.querySelector('alert .hide');

document.querySelector('.show-pass input').addEventListener("click", showPass);

   function showPass() {
        
    
    if (codes.type==="password" || confirmpass.type==="password") {
        codes.type="text";
      confirmpass.type="text";

    }
    else if(codes.type==="text" || confirmpass.type==="text")
    {
        codes.type="password";
      confirmpass.type="password";
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
    localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('userName',userName);
})
