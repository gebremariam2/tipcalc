function calculateTip() {
    //return values from input
    var bill = document.getElementById("billAmt").value;
    var tip = document.getElementById("tipAmt").value;
    var num = document.getElementById("numPpl").value;

    //calculate tip per person, total per person and full bill amount
    var tip = bill * tip / num;
    var total = bill / num + tip;
    var full = bill * tip;
    
    //display all calculations
    document.getElementById("tipPp").innerHTML = tip;
    document.getElementById("totalPp").innerHTML = total;
    document.getElementById("fullAmt").style.display = "block";
    document.getElementById("fullAmount").innerHTML = "Hello";


    document.getElementById("calculate").onclick = function() {
        calculateTip();
      

    

}