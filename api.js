let prompt = null;

const apiKey = "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"; //use your own api key >:(
const url = 'https://api.openai.com/v1/chat/completions';

function setPrompt(userTextInput) {
    prompt = userTextInput;
}

function CallAPI(text) {
    var responseText = text;
    prompt = text;
    const queryData = {
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "user", "content": "Tell me the noninclusive words in '" + prompt +"' and enclose them in round brackets, then put the alternative word that is inclusive and friendly next to it and enclose it in square brackets. Do not explain anything." }
        ]
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(queryData)
    }).then(response => response.json())
        .then(data => {
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                console.log("Response from OpenAI:", data.choices[0].message.content);
                var result = parseUninclusive(data.choices[0].message.content); // Creates an array of uninclusive words called UninclusiveArray[]
                var suggestions = parseSuggestions(data.choices[0].message.content);
                console.log(result);
                console.log(suggestions);
                for (let i = 0; i < result.length; i++) {
                    console.log(responseText);
                    responseText = highlight(responseText, result[i], suggestions[i]);
                }
                document.getElementById('detoxify-content').innerHTML = responseText;
            } else {
                console.log("No response content found.");
                return null;
            }
        })
        .catch(error => console.error('Error:', error));


}

// highlight text given html
function highlight(innerHTML, badWord, suggestion) {
    var index = innerHTML.indexOf(badWord);
    if (index >= 0) {
        console.log("detected word");
        const newHTML = innerHTML.substring(0, index) + "<span class='detoxify-toxic'>" + innerHTML.substring(index, index + badWord.length) + " </span> <span class='detoxify-alternative'>(" + suggestion + ")</span> " + innerHTML.substring(index + badWord.length);
        return newHTML;
    }
    return innerHTML
}
