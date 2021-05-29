function myFunction(){
    var firstNb = document.getElementById("first_number").value;
    var secondNb = document.getElementById("second_number").value;
    var division = firstNb / secondNb;
    var result_remainder =firstNb % secondNb;
    alert(result_remainder);
}