const  firstName = document.getElementById("first_name");
const  lastName = document.getElementById("last_name");
const  email = document.getElementById("email");
const  phone = document.getElementById("phone_number");
const  pass =  document.getElementById("password");
const  conpass = document.getElementById("con_password");
const  submit = document.getElementById("submit");
const  all = document.querySelectorAll("input");

// firstName.addEventListener('input', checkName);
// lastName.addEventListener('input', checkName);
pass.addEventListener('input', checkPass);
conpass.addEventListener('input', checkPass);
submit.addEventListener('click', checkAll);

function checkName(){

}

function checkPass(){

    if(pass.value !== conpass.value){
        pass.classList.add("invalid");
        pass.classList.remove("valid");
        conpass.classList.add("invalid");
        conpass.classList.remove("valid");
    }else{

        pass.classList.remove("invalid");
        pass.classList.add("valid");
        conpass.classList.remove("invalid");
        conpass.classList.add("valid");
    }
}

function checkAll(){

    all.forEach((input =>{
        if(input.value.length === 0){
            input.classList.remove("valid");
            input.classList.add("invalid");
        }else{
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
    }))

}

