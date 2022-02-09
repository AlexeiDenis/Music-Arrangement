const divbass1 = document.getElementById('bas1');
const divbass2 = document.getElementById('bas2');



function PlayBass1(){
    const x= document.getElementById("audiob2")
    x.play();
    // x.loop=true;
    x.currentTime=0;
    divbass1.style.backgroundColor="#8c7ae6";
    
    x.onpause=()=>{
        divbass1.style.backgroundColor="#F6EBEB";}
    x.onended=()=>{
        divbass1.style.backgroundColor="#F6EBEB";}
}


function PlayBass2(){
    const x = document.getElementById('audiob1');
    x.play();
    x.loop=true;
    x.currentTime=0;
    divbass2.style.backgroundColor="#FEA47F";
   
    x.onpause=()=>{
        divbass2.style.backgroundColor="#F6EBEB";}
    x.onended=()=>{
        divbass2.style.backgroundColor="#F6EBEB";}
}



divbass1.addEventListener('click', ()=>{
    const x = document.getElementById('audiob2');
    if(x.paused){
        PlayBass1();
    }else{x.pause();}
});
divbass2.addEventListener('click', ()=> {
    const x = document.getElementById('audiob1');
    if(x.paused){
      
        PlayBass2();
    }else{x.pause();}
});





// Keyboard

function PlayKeyboard(e){
    const x = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const y = document.querySelector(`.element1[data-key="${e.keyCode}"]`);
    let z = e.keyCode;
    if(!x) return;
    x.currentTime=0;
    if (x.paused) 
    { 
    x.play();
   switch(z){
            case 81: y.style.backgroundColor="#8c7ae6";break;
            case 87: y.style.backgroundColor="#FEA47F";break;
            case 69: y.style.backgroundColor="#44bd32";break;
            case 65: y.style.backgroundColor="#192a56";break;
            case 83: y.style.backgroundColor="#6D214F";break;
           
            
   }
    }else 
     { x.pause();
        y.style.backgroundColor="#F6EBEB";
       
 }
   x.onended=()=>{y.style.backgroundColor="#F6EBEB";}
   x.onpause=()=>{y.style.backgroundColor="#F6EBEB";}
   
}


window.addEventListener('keydown', PlayKeyboard);