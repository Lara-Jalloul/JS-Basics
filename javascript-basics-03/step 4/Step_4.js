function ChangeBorder(){
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirmation");
    var pass_value = password;
    var pass_conf = confirm;

    if(pass_value != pass_conf){

        password.style.border = "1px solid red";
        confirm.style.border = "1px solid red";
    }
}