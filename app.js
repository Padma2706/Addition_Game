
let fnum,snum; 
const start=()=>{
    fnum=document.getElementById("fnum").innerHTML=generateRandomNumbers();
    snum=document.getElementById("snum").innerHTML=generateRandomNumbers();
    document.getElementById("result").value=""; 
    output.textContent="";
}
let output;
const check=()=>{
    output=document.getElementById("ten");
    let result=document.getElementById("result").value;
    let ans=parseInt(fnum)+parseInt(snum);
    console.log(ans,result);
    if(result == ans){
        output.textContent="Good Job...";
        output.className="text-success";
    }
    else {
        output.textContent="Oops ! Try Again";
        output.className="text-danger"
    }
}
const restart=()=>{
    document.getElementById("result").value=""; 
    output.textContent="";
}
document.getElementById("but0").addEventListener("click",start);
document.getElementById("but1").addEventListener("click",check);
document.getElementById("but2").addEventListener("click",restart);
const generateRandomNumbers=()=>{
    return Math.floor(Math.random() *100)+1;
}