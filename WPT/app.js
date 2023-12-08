function display(){
    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let dob=document.getElementById("date");
    let address=document.getElementById("area");
    let ten=document.getElementById("ten");
    let tw=document.getElementById("tw");
    let be=document.getElementById("be");
  
      
    console.log(fname.value + lname.value + dob.value + address.value)
   
}

function resetForm(){

    let fname=document.getElementById("fname");
    fname.value=""
    let lname=document.getElementById("lname");
    lname.value="";
    let dob=document.getElementById("date");
    dob.value="";
    let address=document.getElementById("area");
    address.value="";
}