const http = require('http');
const https = require('https');

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQza5B6DrWd1smNddShoPKYT42_lRWCYqqvvoffdZNgx_Wp28KySj2HiMsefasoTdjCuUuqNTTgEZMH/pub?output=csv';

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/api/csv') {
    https.get(CSV_URL, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/csv' });
        res.end(data);
      });
    }).on('error', (err) => {
      res.writeHead(500);
      res.end('Error fetching CSV: ' + err.message);
    });
  } else if (req.url === '/') {
    // Serve the index.html file
    const fs = require('fs');
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
