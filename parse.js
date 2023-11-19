let example = "test *text text text text* test test";
let parsedText;

function parseProfanity(inputText){
    var parsedText = inputText.substring(
        inputText.indexOf("*") + 1, 
        inputText.lastIndexOf("*")
    );

    const ProfanityArray = parsedText.split(" ");
    
    return ProfanityArray;
}

console.log(parseProfanity(example));