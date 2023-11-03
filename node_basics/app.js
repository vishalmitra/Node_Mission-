const http = require('http');
 // gobally available module for node js and this require can also load our local files

const server = http.createServer((req, res) => {
    console.log(req);
    //process.exit();    this makes the stops listining from the server create. process.exit(), the Node.js server process would immediately terminate, and the server would stop listening for incoming requests. This would effectively shut down your server.
});
//createServer first param is request that take and second is for the response .


server.listen(3000);
// all these funny thing is for creating server haha :)