const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
    console.log(req.url);
    
    const url = req.url;
    const method =  req.method
    if (url === '/') {       
        res.setHeader('Content-Type', 'text/html');
        const html = '<html> <head> <title> form page</title></head> <body> <form action="/redirect" method="POST" name="message" >  <input type="text" >     </input> <button type="submit" > send mesage </button>       </form>   </body>  </html>'

        res.write(html);
        return res.end();
    }
    if (url === "/redirect" &&  method === "POST") {
        
        fs.writeFileSync('redirectes_file', 'Dummy');
        res.statusCode = 302;
        res.setHeader("Location", '/');
        return res.end();                
       }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>node mission</title></head>');
        res.write('<body><h1>Hello this is my first node response I made</h1></body>');
        res.write('</html>');       
        return  res.end();

})

server.listen(3000);