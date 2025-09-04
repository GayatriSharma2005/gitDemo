const http=require('http'); 
const port=3000;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello world\n');
});
server.listen(port,'localhost',()=>{
    console.log(`server running at  http:localhost:${port}/`);
});