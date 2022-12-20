const os = require("os");
const fs =require("fs");
function hello() {
console.log("20-dec-22");
}
const http=require("http");
const fileData = fs.readFileSync("./data.txt","utf8");

console.log(fileData);

const server = http.createServer ((req,res)=>{
    const userData=[
       {
       Date:"20-dec-22" 
       },
    ];
    if(req.url==="/"){
        res.write(JSON.stringify(userData));
    }
    res.end();
});

server.listen(3002);