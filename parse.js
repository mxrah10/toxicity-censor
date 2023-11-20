function parseUninclusive(inputText) {
    let result = []
    let currentPhrase = ""
    let phraseStarted = false;
  
    for (let i in inputText) {
      if (phraseStarted) {
        if (inputText[i] == ')') {
          phraseStarted = false;
          result.push(currentPhrase)
          currentPhrase = "";
        } else {
            currentPhrase += inputText[i];
        }
      }
      if (inputText[i] == '(') {
        phraseStarted = true;
      }
    }
  
    return result;
  }

function parseSuggestions(inputText){
    let result = []
    let currentPhrase = ""
    let phraseStarted = false;
  
    for (let i in inputText) {
      if (phraseStarted) {
        if (inputText[i] == ']') {
          phraseStarted = false;
          result.push(currentPhrase)
          currentPhrase = "";
        } else {
            currentPhrase += inputText[i];
        }
      }
      if (inputText[i] == '[') {
        phraseStarted = true;
      }
    }
  
    return result;
}

