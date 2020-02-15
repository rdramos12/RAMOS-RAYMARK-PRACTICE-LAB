function billingFunction(){
    let same1 = document.getElementById("same").checked;  
    let oo = document.getElementById("shippingName").value;
    if(same1 == true) {
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}