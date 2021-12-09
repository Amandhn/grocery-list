function add1Element() {
    var para=document.createElement("TD");
    para.innerHTML=document.getElementById("ek").value;
    document.getElementById("do").appendChild(para);
    reset1();    
}
function reset1()
{
    let p=document.getElementById("ek");
    p.value="";
}
