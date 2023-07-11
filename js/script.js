var  firstName = document.getElementById("first_name");
var  lastName = document.getElementById("last_name");
var  email = document.getElementById("email");
var  phone = document.getElementById("phone_number");
var  pass =  document.getElementById("password");
var  conpass = document.getElementById("con_password");
var  submit = document.getElementById("submit");
var  all = document.querySelectorAll("input");

firstName.addEventListener('input', noNum);
lastName.addEventListener('input', noNum);
pass.addEventListener('input', checkPasswords);
conpass.addEventListener('input', checkPasswords);
email.addEventListener('input', checkEmail);
submit.addEventListener('click', checkAll);

function noNum(event){
    
    const value = event.target.value;
    
    const newValue = value.replace(/[^a-zA-Z]/g, "");
    
    event.target.value = newValue;

    if(newValue.length >= 3){
        console.log("yes");
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    }else{
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
        event.target.setCustomValidity("Input too short!");
    }

}


function formatPhoneNumber(input) {
    var phoneNumber = input.replace(/\D/g, ''); // Remove all non-digit characters from the input

    // Add "1 -" prefix
    var formattedPhoneNumber = '1-';

    // Remove the prefix from the phone number
    var phoneNumberWithoutPrefix = phoneNumber.replace(/^1/, '');

    var digitCount = 0;
    for (var i = 0; i < phoneNumberWithoutPrefix.length; i++) {
    formattedPhoneNumber += phoneNumberWithoutPrefix[i];
    digitCount++;

      // Add dashes after the first three digits and the next three digits
    if ((digitCount === 3 || digitCount === 6) && i !== phoneNumberWithoutPrefix.length - 1) {
        formattedPhoneNumber += '-';
    }
}

    return formattedPhoneNumber;
}


    phone.addEventListener("input", function(event) {
    var inputValue = event.target.value;
    var formattedValue = formatPhoneNumber(inputValue);
    event.target.value = formattedValue;

    if(formattedValue.length <= 13){
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
        event.target.setCustomValidity("Input too short!");

    }else{
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    }
    });

function checkEmail(event){
    var inputValue = event.target.value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)){
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    }else{
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");
    }
    
    event.target.value = inputValue;
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

function checkPasswords(event){
    let values = event.target.value;

    if(values.length < 6){
        
        event.target.classList.add("invalid");
        console.log("not");
    }else{
        console.log("6");
        checkPass();
    }
}

function checkAll(){

    all.forEach((input =>{
        if(input.value.length === 0){
            input.classList.remove("valid");
            input.classList.add("invalid");
            input.setCustomValidity("Input can't be empty!");
        }else{
            // input.classList.add("valid");
            // input.classList.remove("invalid");
            input.setCustomValidity("");
        }
    }));

}


