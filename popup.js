document.getElementById("checkBtn").addEventListener("click", function(){

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    
    let strength = 0;
    
    if(password.length >= 8) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^A-Za-z0-9]/.test(password)) strength++;
    
    if(strength <= 1){
    result.textContent = "Weak Password";
    result.style.color = "red";
    }
    
    else if(strength == 2 || strength == 3){
    result.textContent = "Medium Password";
    result.style.color = "orange";
    }
    
    else{
    result.textContent = "Strong Password";
    result.style.color = "green";
    }
    
    });