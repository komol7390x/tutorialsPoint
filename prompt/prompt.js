const prompt = require('prompt-sync')();
const askPrompt=function(data){
    return prompt(data)
}

module.exports={askPrompt}