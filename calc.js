function calculateTip{
    //return values from input
    var billAmt = document.getElementById("billAmt").value;
    var tipAmt = document.getElementById("tipAmt").value;
    var numPpl = document.getElementById("numPpl").value;

    //calculate tip per person, total per person and full bill amount
    var tip = billAmt * tipAmt / numPpl;
    var total = billAmt / numPpl + tip;
    var fullAmt = billAmt * tipAmt;
    
    //display all calculations
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total").innerHTML = total;
    document.getElementById("fullAmt").innerHTML = fullAmt;


    

}