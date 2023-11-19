require('dotenv').config();

let prompt = null;

const apiKey = process.env.OPENAI_API_KEY; //use your own api key >:(
const url = 'https://api.openai.com/v1/chat/completions';

function setPrompt(text){
    prompt = text
}

const queryData = {
    model: "gpt-3.5-turbo", 
    messages: [
        { "role": "user", "content": "Give me the non-inclusive or toxic or negative words by enclosing them in (), then the suggested words to replace them in [] from the following text without explaining anything. Here is the text:" + prompt}
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
})
.then(response => response.json())
.then(data => {
    console.log(data);

    if (data.choices && data.choices.length > 0 && data.choices[0].message) {

        console.log("Response from OpenAI:", data.choices[0].message.content);
    } else {
        console.log("No response content found.");
    }
})
.catch(error => console.error('Error:', error));
