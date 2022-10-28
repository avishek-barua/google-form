

const loginBtn = document.querySelector('#loginBtn');



loginBtn.addEventListener("click", () => {


    var localemail = localStorage.getItem('userName');
    var localpass = localStorage.getItem('password');



    var formEmail = document.getElementById('email').value;
    var formpass = document.getElementById('password').value;

    if (formpass == localpass && formEmail == localemail) {
        document.getElementById('login-form').action ='welcome.html'
    }else{
    alert('login credentials doesn\'t match');
    }
});