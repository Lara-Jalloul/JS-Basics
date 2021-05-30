let target = document.querySelector('div');
let target1 = document.querySelector('input');
target1.addEventListener("onchange", myFunction(), false);

function myFunction(){
    var name = document.getElementById("name").value;
    document.getElementById("display").innerHTML = name;
}


