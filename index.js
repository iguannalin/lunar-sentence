window.addEventListener("load", () => {
  const alphabet = {"E": {symbol: "🌑",rotation: 0},"M": {symbol: "🌒",rotation: 0},"A": {symbol: "🌓",rotation: 0},"H": {symbol: "🌔",rotation: 0},"R": {symbol: "🌕",rotation: 0},"G": {symbol: "🌖",rotation: 0},"I": {symbol: "🌗",rotation: 0},"B": {symbol: "🌘",rotation: 0},"O": {symbol: "🌑",rotation: 45},"F": {symbol: "🌒",rotation: 45},"T": {symbol: "🌓",rotation: 45},"Y": {symbol: "🌔",rotation: 45},"N": {symbol: "🌕",rotation: 45},"W": {symbol: "🌖",rotation: 45},"S": {symbol: "🌗",rotation: 45},"K": {symbol: "🌘",rotation: 45},"L": {symbol: "🌑",rotation: 90},"V": {symbol: "🌒",rotation: 90},"C": {symbol: "🌓",rotation: 90},"X": {symbol: "🌔",rotation: 90},"U": {symbol: "🌕",rotation: 90},"Z": {symbol: "🌖",rotation: 90},"D": {symbol: "🌗",rotation: 90},"J": {symbol: "🌘",rotation: 90},"P": {symbol: "🌑",rotation: 180},"Q": {symbol: "🌕",rotation: 180}};
    // soundclip from https://freesound.org/people/joedeshon/sounds/79237/
  const audio = new Audio('type.wav');
  let input = document.getElementById('prompt');

  let timeout;
  let debounce = function(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
  
  function onType(e) {
    audio.loop = false;
    audio.play(); 
    // setTimeout(() => {
    //   parent.innerText += '?';
    // }, max*speed);
    if (e.data && e.data.toUpperCase() in alphabet) {
      e.target.value = e.target.value.substr(0,e.target.value.length-1) + alphabet[e.data.toUpperCase()].symbol;
    }
    else return e;
  }
  
  input.focus();
  input.oninput = onType;
});