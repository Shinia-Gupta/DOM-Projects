
let randomColor=function(){
  const hex="0123456789ABCDEF";
  let color="#";
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
  // console.log(color);
}
let intervalId;
let startColorChange=function(){
  if(!intervalId){
    intervalId=setInterval(colorChange,1000);
  }
}


let stopColorChange=function(){
  clearInterval(intervalId);
  intervalId=null;  //just for a clearer code
}

document.querySelector("#start").addEventListener('click',startColorChange);

document.querySelector("#stop").addEventListener('click',stopColorChange);

 function colorChange(){
   document.body.style.backgroundColor=randomColor();
 }
// randomColor();