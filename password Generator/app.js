const passw=document.getElementById("pword")
const butt=document.getElementById("btn")
const characters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '[', '`', '!', '@',  '#', '$', '%',
'^', '&', '*', '(',  ')', '_', '+',
'-', '=', '[', ']',  '{', '}', ';',
"'", ':', '"', '\\', '|', ',', '.',
'<', '>', '/', '?',  '~', ']', '/']



function passwordmaker()
{
    let x=Math.floor(Math.random()*characters.length)
    return characters[x]
}

function passwordm()
{
    let passwordc=""
for(let i=0;i<12;i++){
passwordc=passwordc+passwordmaker()
     

}
document.getElementById("pword").value = passwordc 
}

