function signupvalidate() {

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var email = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


   if (password != confirmPassword)
   {
        alert("Passwords do not match")
        return false
    }
   
    else if (!(email.match(validRegex))){
        alert("You have entered an invalid email address!")
        return false
    }

    else{
        alert("Signup Successful, welcome RobocoPC Memeber.")
    }
 }