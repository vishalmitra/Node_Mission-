
const fs = require('fs')

const requesthandler = (req, res) => {
    

const url = req.url;
const method = req.method;
if (url === '/') {
res.write('<html>');
res.write('<head><title>Enter Message</title></head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
res.write('</html>');
return res.end();
}
if (url === '/message' && method === 'POST') {
const body = [];
req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
});
req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split('=')[1];
    fs.writeFile('asyncmessage.txt', message, funasy => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }  );
});

}
// res.setHeader('Content-Type', 'text/html');
// res.write('<html>');
// res.write('<head><title>My First Page</title></head>');
// res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
// res.write('</html>');
// res.end();
 }

module.exports =requesthandler;// when only single function was there

// const obj = {
    
//     handler: requesthandler,
//     sometext : " the second thing to export "
// } // when only mutitiple function was there  in app.js the syntax changes

 
// module.exports.requesthandler  // when only mutitiple  function was there
// module.exports.sometext  // when only single mutitiple  was there