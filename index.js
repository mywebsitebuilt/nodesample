import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Write some text to the response
    res.end('Welcome Fayaz');
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
