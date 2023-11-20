let prompt = null;

const apiKey = null; //use your own api key >:(
const url = 'https://api.openai.com/v1/chat/completions';

function setPrompt(userTextInput) {
    prompt = userTextInput;
}

function CallAPI(text) {
    var reponseText = text;
    const queryData = {
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "user", "content": "Give me the non-inclusive or toxic or negative words by enclosing them in (), then the suggested words to replace them in [] from the following text without explaining anything. Here is the text:" + prompt }
        ]
    };

    const resp = null;

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
                var result = parseUninclusive(API_Text); // Creates an array of uninclusive words called UninclusiveArray[]
                for (let words = 0; words < result.length; words++) {
                    responseText = highlight(responseText, result[words]);
                }
                document.getElementById('detoxify-content').innerHTML = responseText;
            } else {
                console.log("No response content found.");
                return null;
            }
        })
        .catch(error => console.error('Error:', error));


}
