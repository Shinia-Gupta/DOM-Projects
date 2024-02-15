//DONT SELECT ALL BUTTONS INDIVIDUALY! Just use for-each on a class of buttons
// const grey=document.getElementById("grey");
// const white=document.getElementById("white");
// const blue=document.getElementById("blue");
// const yellow=document.getElementById("yellow");

const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
// console.log(buttons);

buttons.forEach((button)=>{
  // console.log(button);

  button.addEventListener('click', (event)=>{
    // console.log(event);
    // console.log(event.target);
    if(event.target.id==='grey'){
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='yellow'){
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='blue'){
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='white'){
      body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='purple'){
      body.style.backgroundColor=event.target.id;
    }
  })
})
