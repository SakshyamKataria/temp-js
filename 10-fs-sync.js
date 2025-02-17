const {readFileSync,writeFileSync, write} = require('fs'); //by destructuring

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);

//if file not there it will create one else will overwrite it
writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`);

//to append instead of overwrite
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'});