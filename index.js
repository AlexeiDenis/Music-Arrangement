const divbass1 = document.getElementById('bas1');
const STOPB = document.getElementById('stopb');
const divbass2 = document.getElementById('bas2');
const divfx = document.getElementById('fxdiv');

function PlayFX(){
    const x=document.getElementById('fx');
    x.play();
    x.currentTime=0;
    divfx.style.background="#e1b12c";
    divfx.style.color="white";

    x.onpause=()=>{divfx.style.color="black";
        divfx.style.background="#F6EBEB";}
    x.onended=()=>{divbass1.style.color="black";
        divfx.style.background="#F6EBEB";}
}
function PlayBass1(){
    const x= document.getElementById("audiob1")
    x.play();
    // x.loop=true;
    x.currentTime=0;
    divbass1.style.background="#8c7ae6";
    divbass1.style.color="white";
    x.onpause=()=>{divbass1.style.color="black";
        divbass1.style.background="#F6EBEB";}
    x.onended=()=>{divbass1.style.color="black";
        divbass1.style.background="#F6EBEB";}
}


function PlayBass2(){
    const x = document.getElementById('audiob2');
    x.play();
    x.loop=true;
    x.currentTime=0;
    divbass2.style.background="#8c7ae6";
    divbass2.style.color="white";
    x.onpause=()=>{divbass2.style.color="black";
        divbass2.style.background="#F6EBEB";}
    x.onended=()=>{divbass2.style.color="black";
        divbass2.style.background="#F6EBEB";}
}

function PauseBass(){
    const y= document.getElementById("audiob1")
    const z= document.getElementById("audiob2");
    if(!(y.paused) || !(z.paused)){
        y.pause();
        z.pause();
    }
    
}

divbass1.addEventListener('click', ()=>{
    const x = document.getElementById('audiob1');
    if(x.paused){
        PlayBass1();
    }else{x.pause();}
});
divbass2.addEventListener('click', ()=> {
    const x = document.getElementById('audiob2');
    if(x.paused){
      
        PlayBass2();
    }else{x.pause();}
});
STOPB.addEventListener('click', PauseBass);
divfx.addEventListener('click', ()=>{
    const x = document.getElementById('fx');
    if(x.paused){
        PlayFX();
    }else{x.pause();}
})