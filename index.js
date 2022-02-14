const divbass1 = document.getElementById("bas1");
const divbass2 = document.getElementById("bas2");
const s = document.getElementById("strings");
const synth = document.getElementById("synth");
const ch = document.getElementById("choir");

function PlayChoir() {
  const x = document.getElementById("audchoir");
  x.currentTime = 0;
  x.play();
  x.loop = true;
  ch.style.backgroundColor = "#192a56";
  ch.classList.add("animatie");
  x.onpause = () => {
    ch.style.backgroundColor = "#F6EBEB";
    ch.classList.remove("animatie");
  };
  x.onended = () => {
    ch.style.backgroundColor = "#F6EBEB";
    ch.classList.remove("animatie");
  };
}
function PlaySynth() {
  const x = document.getElementById("audsynth");
  x.currentTime = 0;
  x.play();
  x.loop = true;
  synth.style.backgroundColor = "#6D214F";
  synth.classList.add("animatie");
  x.onpause = () => {
    synth.style.backgroundColor = "#F6EBEB";
    synth.classList.remove("animatie");
  };
  x.onended = () => {
    synth.style.backgroundColor = "#F6EBEB";
    synth.classList.remove("animatie");
  };
}
function PlayStrings() {
  const x = document.getElementById("audstring");
  x.currentTime = 0;
  x.play();
  x.loop = true;
  s.style.backgroundColor = "#44bd32";
  s.classList.add("animatie");
  x.onpause = () => {
    s.style.backgroundColor = "#F6EBEB";
    s.classList.remove("animatie");
  };
  x.onended = () => {
    s.style.backgroundColor = "#F6EBEB";
    s.classList.remove("animatie");
  };
}
function PlayBass1() {
  const x = document.getElementById("audiob2");
  x.currentTime = 0;
  x.play();
  x.loop = true;
  divbass1.classList.add("animatie");
  divbass1.style.backgroundColor = "#8c7ae6";

  x.onpause = () => {
    divbass1.style.backgroundColor = "#F6EBEB";
    divbass1.classList.remove("animatie");
  };
  x.onended = () => {
    divbass1.style.backgroundColor = "#F6EBEB";
    divbass1.classList.remove("animatie");
  };
}

function PlayBass2() {
  const x = document.getElementById("audiob1");
  x.currentTime = 0;
  x.play();
  x.loop = true;

  divbass2.style.backgroundColor = "#FEA47F";
  divbass2.classList.add("animatie");
  x.onpause = () => {
    divbass2.style.backgroundColor = "#F6EBEB";
    divbass2.classList.remove("animatie");
  };
  x.onended = () => {
    divbass2.style.backgroundColor = "#F6EBEB";
    divbass2.classList.remove("animatie");
  };
}

divbass1.addEventListener("click", () => {
  const x = document.getElementById("audiob2");
  if (x.paused) {
    PlayBass1();
  } else {
    x.pause();
  }
});
divbass2.addEventListener("click", () => {
  const x = document.getElementById("audiob1");
  if (x.paused) {
    PlayBass2();
  } else {
    x.pause();
  }
});
s.addEventListener("click", () => {
  const x = document.getElementById("audstring");
  if (x.paused) {
    PlayStrings();
  } else {
    x.pause();
  }
});
synth.addEventListener("click", () => {
  const x = document.getElementById("audsynth");
  if (x.paused) {
    PlaySynth();
  } else {
    x.pause();
  }
});
ch.addEventListener("click", () => {
  const x = document.getElementById("audchoir");
  if (x.paused) {
    PlayChoir();
  } else {
    x.pause();
  }
});

// Keyboard

function PlayKeyboard(e) {
  const x = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const y = document.querySelector(`.element1[data-key="${e.keyCode}"]`);
  let z = e.keyCode;
  if (!x) return;
  x.currentTime = 0;
  if (x.paused) {
    x.play();
    x.loop= false;
    switch (z) {
      case 81:
        y.style.backgroundColor = "#8c7ae6";
        break;
      case 87:
        y.style.backgroundColor = "#FEA47F";
        break;
      case 69:
        y.style.backgroundColor = "#44bd32";
        break;
      case 65:
        y.style.backgroundColor = "#192a56";
        break;
      case 83:
        y.style.backgroundColor = "#6D214F";
        break;
    }
  } else {
    x.pause();
    y.style.backgroundColor = "#F6EBEB";
  }
  x.onended = () => {
    y.style.backgroundColor = "#F6EBEB";
    y.classList.remove("animatie");
  };
  x.onpause = () => {
    y.style.backgroundColor = "#F6EBEB";
    y.classList.remove("animatie");
  };
}

window.addEventListener("keydown", PlayKeyboard);
