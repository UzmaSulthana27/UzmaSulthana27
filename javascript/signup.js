let form = document.getElementById('signup-form');
let un = document.getElementById('username');
let pass = document.getElementById('password');
let cpass = document.getElementById('cpassword');
let num = document.getElementById('number');
let email = document.getElementById('email');
let dob=document.getElementById('date');
let genderRadio= document.getElementsByName('gender');

let unError = document.getElementById('usernameError');
let passError = document.getElementById('passwordError');
let cpassError = document.getElementById('cpasswordError');
let numError = document.getElementById('numberError');
let emError = document.getElementById('emailError');
let dateError=document.getElementById('dateError')
let genError = document.getElementById('genderError');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    unError.textContent = "";
    passError.textContent = "";
    cpassError.textContent = "";
    numError.textContent = "";
    emError.textContent = "";
    dateError.textContent="";
    genError.textContent = "";


    let isValid = true;

    let usernamevalue = un.value.trim();
    if (!usernamevalue) {
        unError.textContent = "username can not be an empty"
        isValid = false;
    }
    else if (usernamevalue.length < 3) {
        unError.textContent = "username can not be less than 3 characters"
        isValid = false;
    }
    else if (usernamevalue.length > 15) {
        unError.textContent = "username can not be more than 15 characters"
        isValid = false;
    }
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(usernamevalue)) {
        unError.textContent = "username name must be an uppercase,lowercase and Number"
        isValid = false;
    }

    let passwordvalue = pass.value.trim();
    if (!passwordvalue) {
        passError.textContent = "password can not be empty"
        isValid = false;
    }
    else if (!/(?=.*[a-z])/.test(passwordvalue)) {
        passError.textContent = "password must be uppercase & number"
        isValid = false;
    }
    else if (!/(?=.*[A-Z])/.test(passwordvalue)) {
        passError.textContent = "password must be include uppercase"
        isValid = false;
    }
    else if (!/(?=.*\d)/.test(passwordvalue)) {
        passError.textContent = "password must be  include number"
        isValid = false;
    }
    else if (!/(?=.*[&*#@])/.test(passwordvalue)) {
        passError.textContent = "must be atleast one special character"
        isValid = false;
    }

    let confirmvalue = cpass.value.trim();
    if (!confirmvalue) {
        cpassError.textContent = "can not be empty"
        isValid = false;
    }
    else if (passwordvalue !== confirmvalue) {
        cpassError.textContent = "password is not matching"
        isValid = false;
    }


    let emailvalue=email.value.trim();
    if(!emailvalue)
    {
        emError.textContent="enter the email id"
        isValid = false;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailvalue))
    // else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue))
    {
        emError.textContent="email is invalid"
        isValid = false;
    }

    let numbervalue=num.value.trim();
    if(!numbervalue)
    {
        numError.textContent="enter the number"
        isValid = false;
    }
    else if(!/^\d{10}$/.test(numbervalue))
    {
        numError.textContent="enter valid number  "
        isValid = false;
    }


    if(!dob.value)
    {
        dateError.textContent="date is mandatory"
        isValid = false;
    }

    let gendervalue=""
    for(let radio of genderRadio){
        if(radio.checked){
            gendervalue=radio.value;
            break;
        }
    }
    if(!gendervalue)
    {
        genError.textContent="gender is mandatory"
        isValid = false;
    }

if(isValid)
{

let userData={
    username:usernamevalue,
    password:passwordvalue,
    cpassword:confirmvalue,
    email:emailvalue,
    num:numbervalue,
    dob:dob.value,
    gender:gendervalue
}

localStorage.setItem('signupData',JSON.stringify(userData))
alert('signup successfully')
form.reset();
window.location.href="login.html"
}

})