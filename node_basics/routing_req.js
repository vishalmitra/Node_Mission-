const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    //console.log(req.method, req.url, req.headers);

    if (req.url === "/")
    {
        const html = '<html> <head> <title> form page</title></head> <body> <form action="/message" method="POST" name="message" >  <input type="text" >     </input> <button type="submit" > send mesage </button>       </form>   </body>  </html>'
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        return res.end();
        // we have written this so that we dont want below to execute 

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node mission</title></head>');
    res.write('<body><h1>Hello this is my first node response I made</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
