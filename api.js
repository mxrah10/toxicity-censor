require('dotenv').config();


const apiKey = process.env.OPENAI_API_KEY; //use your own api key >:(
const url = 'https://api.openai.com/v1/chat/completions';

const queryData = {
    model: "gpt-3.5-turbo", 
    messages: [
        { "role": "user", "content": "Translate the following English text to French: 'Hello, world! Great to meet you all!'" }
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
