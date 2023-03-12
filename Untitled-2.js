let z=document.getElementById("")
var x=6;
var y=4;

function add(){
    sum=x+y;
    console.log(sum);
}
function sub(){
    sub=x-y;
    console.log(sub);
}
function dev(){
    dev=x/y;   
    console.log(dev); 
}
function mul(){
    mul=x*y;    
    console.log(mul);
}


function result(){
    var m=document.getElementById("marks").value;
    if(m>40){
        console.log("passed");
    }
    else{
        console.log("failed");
    }
}