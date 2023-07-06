
let cc=document.getElementById("colorcode")
let cp=document.getElementById("colorpart")
let cb=document.getElementById("btn")
let hexvalue = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


function hexcode(){
    let value=Math.floor(Math.random()*16)
    return hexvalue[value]
}


function  ccolor(){
   
let hexccode='#'
    for(let i=0;i<6;i++){
         
          hexccode=hexccode+hexcode() 
           

    }
    
    cp.style.backgroundColor=hexccode
console.log(typeof hexccode)    
    cc.innerHTML=hexccode
    document.getElementById("colorcode").value = hexccode
}


