

/*  here the re.on() is the event "data" is comming from the form which is redirected here
    actually the data is in chunks literally not as good as the string so first we put it in the
    list or object array  the after 'end'  as res.on() event is completed we are concate all the buffer that is
    is produced and put it in the writefilesycn to get that . 
    we coded the line   fs.writeFileSync('user_enterred_data.txt',message); 
    in side code runs it after the below lines (Asynchronously) are executed first then come to arrow function 
    because the req.on(end) is what the node js will run after the parsing is done  */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
    