function contactvalidate() {

    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    var EmailvalidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var PhonevalidRegex = /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/;

    if (!(email.match(EmailvalidRegex))){
        alert("Please enter a valid email address!")
        return false
    }
    else if (!(phone.match(PhonevalidRegex))){
        alert("Please enter in the format 0123456789.")
        return false
    }
    else{
        alert("Query successfully submitted, we appreciate your feedback.")
    }
}
    
    