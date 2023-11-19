const fetch = require('node-fetch');

const apiKey = 'api-key'; 
const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';

const queryData = {
    prompt: "Translate the following English text to French: 'Hello, world!'",
    max_tokens: 60
};

const response = fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(queryData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
