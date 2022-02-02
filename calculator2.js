let btn=document.getElementsByClassName("button");
let div=document.getElementsByClassName("div")[0];
for (let button of btn) {
   button.addEventListener("click",()=>{
       console.log(button.innerText)
       if (button.innerText=="AC") {
           div.innerText="";
           
       }
       else if (button.innerText==="=") {
           console.log("ok");
           div.innerText=eval(div.innerText)
           
       }
       else{
        div.innerText+=button.innerText;
       }
       
   })
    
}