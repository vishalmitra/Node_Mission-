const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    console.log(req.method, req.url, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node mission</title></head>');
    res.write('<body><h1>Hello this is my first node response I made</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
