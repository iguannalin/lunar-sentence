window.addEventListener("load", () => {
  const alphabet = {
    "E": {
      symbol: "🌑",
      rotation: 0
    },
    "M": {
      symbol: "🌒",
      rotation: 0
    },
    "A": {
      symbol: "🌓",
      rotation: 0
    },
    "H": {
      symbol: "🌔",
      rotation: 0
    },
    "R": {
      symbol: "🌕",
      rotation: 0
    },
    "G": {
      symbol: "🌖",
      rotation: 0
    },
    "I": {
      symbol: "🌗",
      rotation: 0
    },
    "B": {
      symbol: "🌘",
      rotation: 0
    },
    "O": {
      symbol: "🌑",
      rotation: 45
    },
    "F": {
      symbol: "🌒",
      rotation: 45
    },
    "T": {
      symbol: "🌓",
      rotation: 45
    },
    "Y": {
      symbol: "🌔",
      rotation: 45
    },
    "N": {
      symbol: "🌕",
      rotation: 45
    },
    "W": {
      symbol: "🌖",
      rotation: 45
    },
    "S": {
      symbol: "🌗",
      rotation: 45
    },
    "K": {
      symbol: "🌘",
      rotation: 45
    },
    "L": {
      symbol: "🌑",
      rotation: 90
    },
    "V": {
      symbol: "🌒",
      rotation: 90
    },
    "C": {
      symbol: "🌓",
      rotation: 90
    },
    "X": {
      symbol: "🌔",
      rotation: 90
    },
    "U": {
      symbol: "🌕",
      rotation: 90
    },
    "Z": {
      symbol: "🌖",
      rotation: 90
    },
    "D": {
      symbol: "🌗",
      rotation: 90
    },
    "J": {
      symbol: "🌘",
      rotation: 90
    },
    "P": {
      symbol: "🌑",
      rotation: 180
    },
    "Q": {
      symbol: "🌕",
      rotation: 180
    },
  }
  
  const box = document.getElementById('result');
  let searchResults = {};

  const getRandomEmojiFromKey = (emojiKeyList) => emojis[emojiKeyList[getRandomInt(0, emojiKeyList.length)]];
  const getOrdinal = (i) => i == 0 ? "first" : i == 1 ? "second" : i == 2 ? "third" : i == 3 ? "fourth" : i == 4 ? "fifth" : i == 5 ? "sixth" : '';

  let input = document.getElementById('prompt');
  let result = document.getElementById('result');

  function setText(limit) {
    // console.log(limit, searchResults)
    box.innerText = "";
    result.innerHTML = "";
    for (let i = 0; i < limit; i++) {
      if (searchResults[i]) box.innerText += searchResults[i];
    }
  }

  let timeout;
  let debounce = function(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
  
  function onType(e) {
    if (e.data && e.data.toUpperCase() in alphabet) {
      e.target.value = e.target.value.substr(0,e.target.value.length-1) + alphabet[e.data.toUpperCase()].symbol;
    }
    else return e;
  }
  
  input.focus();
  input.oninput = onType;


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
});