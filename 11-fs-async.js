const {readFile,writeFile} = require('fs'); //by destructuring

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt',`Your async data`,(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(result,'File written successfully');
        });
    });
});