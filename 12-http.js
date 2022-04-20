const http = require('http');

const server = http.createServer((req, res) => { // request, response
    // console.log(req);
    // res.write('Welcome to our homepage');
    // res.end();

    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end(`
        <h1>Opps!</h1>
        <p>can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
    }
})

server.listen(5000);