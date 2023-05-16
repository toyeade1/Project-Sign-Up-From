// I will be attempting to make the passwords have to match before the users are allowed to create an account. 

function checkPassword(){
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirm-password").value;


    if (pw1 !== pw2) {
        
        document.querySelector(".pwdMismatch").innerHTML = "Passwords do not match";
        document.querySelector(".pwdMismatch").style.color = "red";
        document.querySelector(".pwdMismatch").style.fontSize = "12px";
       // document.querySelector(".button-65").setAttribute("disabled", "true");
        return false;}

    else if (pw1 === pw2 && pw1.value !== "" && pw2.value !== "" && pw2.value !== " " && pw1.value !== " ") {
        document.querySelector(".pwdMismatch").innerHTML = " ✓ Passwords Match ";
        document.querySelector(".pwdMismatch").style.color = "green";
        document.querySelector(".pwdMismatch").style.fontSize = "12px";
        document.querySelector(".button-65").removeAttribute("disabled");
        return true;}

    else {
        document.querySelector(".pwdMismatch").innerHTML= "";
    }
}

function activatePassword() {
    if (checkPassword && document.getElementById("password").value != "" && document.getElementById("confirm-password").value != "" && document.getElementById("password").value != " " && document.getElementById("confirm-password").value != " "){
        document.querySelector(".button-65").setAttribute("enabled", "false");
        document.querySelector(".button-65").removeAttribute("disabled");
    }
}



document.getElementById("password").addEventListener("keyup", checkPassword);
document.getElementById("confirm-password").addEventListener("keyup", checkPassword);
document.getElementById("confirm-password").addEventListener("blur", activatePassword);

