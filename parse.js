function parseUninclusive(inputText){
    var parsedUninclusive = inputText.substring(
        inputText.indexOf("(") + 1,
        inputText.lastIndexOf(")")
    );

    const UninclusiveArray = parsedUninclusive.split(" ");
    return UninclusiveArray;
}

function parseSuggestion(inputText){
    var parsedSuggestions = inputText.substring(
        inputText.indexOf("[") + 1,
        inputText.lastIndexOf("]")
    )

    const SuggestionsArray = parsedSuggestions.split(" ");
    return SuggestionsArray;
}

