
function fun(){
    let a=document.getElementById("bank").value
    let today=new Date(a);
    console.log(a)
    console.log(today.toDateString())
    console.log(today.getMonth()+1)
    console.log(today.getFullYear())
    
    
}