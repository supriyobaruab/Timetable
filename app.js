const supriyo = document.getElementById("supriyo");
const today   = new Date();
const dateString = today.toLocaleDateString('en-US',{weekday : "long"});

console.log(dateString);
if((dateString=== "Sunday")||(dateString === "Tuesday")){
    // For supriyo
    supriyo.rows[1].cells[0].innerHTML = "INTEGRAL";
    supriyo.rows[2].cells[0].innerHTML = "PHYSICS ";
    supriyo.rows[3].cells[0].innerHTML = "DISCRETE";
    supriyo.rows[1].cells[1].innerHTML = "10.00 AM to 11.00 AM";
    supriyo.rows[2].cells[1].innerHTML = "11.00 AM to 12.00 PM";
    supriyo.rows[3].cells[1].innerHTML = "01.20 PM to 02.00 PM";
    supriyo.rows[1].cells[2].innerHTML = "DS0605";
    supriyo.rows[2].cells[2].innerHTML = "2113";
    supriyo.rows[3].cells[2].innerHTML = "3104";
    // For nourin 
    nourin.rows[1].cells[0].innerHTML = "INTEGRAL";
    nourin.rows[2].cells[0].innerHTML = "PHYSICS ";
    nourin.rows[3].cells[0].innerHTML = "DISCRETE";
    nourin.rows[1].cells[1].innerHTML = "10.00 AM to 11.00 AM";
    nourin.rows[2].cells[1].innerHTML = "11.00 AM to 12.00 PM";
    nourin.rows[3].cells[1].innerHTML = "01.20 PM to 02.00 PM";
    nourin.rows[1].cells[2].innerHTML = "DS0605";
    nourin.rows[2].cells[2].innerHTML = "2113";
    nourin.rows[3].cells[2].innerHTML = "3104";
    // For sujoy
    sujoy.rows[1].cells[0].innerHTML = "INTEGRAL";
    sujoy.rows[2].cells[0].innerHTML = "PHYSICS ";
    sujoy.rows[3].cells[0].innerHTML = "DISCRETE";
    sujoy.rows[1].cells[1].innerHTML = "10.00 AM to 11.00 AM";
    sujoy.rows[2].cells[1].innerHTML = "11.00 AM to 12.00 PM";
    sujoy.rows[3].cells[1].innerHTML = "01.20 PM to 02.00 PM";
    sujoy.rows[1].cells[2].innerHTML = "DS0605";
    sujoy.rows[2].cells[2].innerHTML = "2113";
    sujoy.rows[3].cells[2].innerHTML = "3104";
    // for fabiha
    fabiha.rows[1].cells[0].innerHTML = "JAVA";
    fabiha.rows[2].cells[0].innerHTML = "ENGLISH";
    fabiha.rows[3].cells[0].innerHTML = "--";
    fabiha.rows[1].cells[1].innerHTML = "09.00 AM to 10.30 AM";
    fabiha.rows[2].cells[1].innerHTML = "01.00 AM to 02.00 PM";
    fabiha.rows[3].cells[1].innerHTML = "--";
    fabiha.rows[1].cells[2].innerHTML = "--";
    fabiha.rows[2].cells[2].innerHTML = "--";
    fabiha.rows[3].cells[2].innerHTML = "--";

    
}
else if((dateString=== "Monday")||(dateString === "Wednesday")){
    // For supriyo
    supriyo.rows[1].cells[0].innerHTML = "JAVA";
    supriyo.rows[2].cells[0].innerHTML = "ENGLISH ";
    supriyo.rows[3].cells[0].innerHTML = "--";
    supriyo.rows[1].cells[1].innerHTML = "10.30 AM to 11.50 AM";
    supriyo.rows[3].cells[1].innerHTML = "--";
    supriyo.rows[2].cells[1].innerHTML = "01.20 PM to 02.00 PM";
    supriyo.rows[1].cells[2].innerHTML = "9202";
    supriyo.rows[2].cells[2].innerHTML = "6109";
    supriyo.rows[3].cells[2].innerHTML = "--";
    // For nourin 
    nourin.rows[1].cells[0].innerHTML = "JAVA";
    nourin.rows[2].cells[0].innerHTML = "ENGLISH ";
    nourin.rows[3].cells[0].innerHTML = "--";
    nourin.rows[1].cells[1].innerHTML = "10.30 AM to 11.50 AM";
    nourin.rows[3].cells[1].innerHTML = "--";
    nourin.rows[2].cells[1].innerHTML = "01.20 PM to 02.00 PM";
    nourin.rows[1].cells[2].innerHTML = "9202";
    nourin.rows[2].cells[2].innerHTML = "6109";
    nourin.rows[3].cells[2].innerHTML = "--";
    // For sujoy
    sujoy.rows[1].cells[0].innerHTML = "ENGLISH";
    sujoy.rows[2].cells[0].innerHTML = "JAVA ";
    sujoy.rows[3].cells[0].innerHTML = "--";
    sujoy.rows[1].cells[1].innerHTML = "09.00 AM to 10.00 AM";
    sujoy.rows[3].cells[1].innerHTML = "--";
    sujoy.rows[2].cells[1].innerHTML = "10.30 PM to 11.50 PM";
    sujoy.rows[1].cells[2].innerHTML = "--";
    sujoy.rows[2].cells[2].innerHTML = "6109";
    sujoy.rows[3].cells[2].innerHTML = "--";
    // for fabiha
    fabiha.rows[1].cells[0].innerHTML = "PHYSICS";
    fabiha.rows[2].cells[0].innerHTML = "DISCRETE";
    fabiha.rows[3].cells[0].innerHTML = "INTRIGAL";
    fabiha.rows[1].cells[1].innerHTML = "10.00 AM to 11.00 AM";
    fabiha.rows[2].cells[1].innerHTML = "11.00 AM to 12.00 PM";
    fabiha.rows[3].cells[1].innerHTML = "12-00 PM to 01.00 PM";
    fabiha.rows[1].cells[2].innerHTML = "--";
    fabiha.rows[2].cells[2].innerHTML = "--";
    fabiha.rows[3].cells[2].innerHTML = "--";

    
}