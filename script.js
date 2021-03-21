
function errorMessage() { 
    var inpObj = document.getElementById("email"); 
    if (!inpObj.checkValidity()) { 
        document.getElementById("error") 
                  .innerHTML = inpObj.validationMessage; 
    } else { 
        document.getElementById("error") 
                  .innerHTML = "Oops! Please add your email."; 
    } 
} 

