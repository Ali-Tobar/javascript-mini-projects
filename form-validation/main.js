
const form = document.getElementById("contactForm");
const NameInput = document.getElementById("UserName");
const EmailInput = document.getElementById("Email");
const PhoneInput = document.getElementById("Phone");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {

    e.preventDefault();
    
    let isValid = true;
    let text = "";
    
  
    let Name = NameInput.value.trim();
    let Email = EmailInput.value.trim();
    let Phone = PhoneInput.value.trim();


    if (Name.length < 6) {
        text = "Please Enter Valid UserName";
        isValid = false;
    } else if (Email.length < 10 || Email.indexOf("@") == -1) {
        text = "Please Enter Valid Email";
        isValid = false;
    } else if (Phone.length < 11 || isNaN(Phone)) {
        text = "Please Enter Valid Phone";
        isValid = false;
    } 

    if (!isValid) {
        error.textContent = text;
        error.style.color = "red"; 
    } else {
        error.textContent = "";
        console.log("Login Successful! Redirecting...");
    }
});