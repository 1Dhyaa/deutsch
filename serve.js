const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.webmanifest': 'application/manifest+json'
};

const PROFILES_DIR = path.join(BASE_DIR, 'data', 'profiles');
if (!fs.existsSync(PROFILES_DIR)) {
  try { fs.mkdirSync(PROFILES_DIR, { recursive: true }); } catch (e) {}
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let reqPath = decodeURI(parsedUrl.pathname);

  // Local Disk User Profile API
  if (reqPath === '/api/profile') {
    if (req.method === 'GET') {
      const user = (parsedUrl.searchParams.get('user') || 'dhyaa').toLowerCase().replace(/[^a-z0-9_\-\u0600-\u06FF]/g, '');
      const pFile = path.join(PROFILES_DIR, `${user || 'dhyaa'}.json`);
      if (fs.existsSync(pFile)) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        return res.end(fs.readFileSync(pFile, 'utf8'));
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        return res.end(JSON.stringify({ error: 'Not found' }));
      }
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          const user = (parsed.username || 'dhyaa').toLowerCase().replace(/[^a-z0-9_\-\u0600-\u06FF]/g, '');
          const pFile = path.join(PROFILES_DIR, `${user || 'dhyaa'}.json`);
          fs.writeFileSync(pFile, JSON.stringify(parsed.data || parsed, null, 2), 'utf8');
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ ok: true, user }));
        } catch (err) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(BASE_DIR, reqPath);

  // Security check to avoid path traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.statusCode = 403;
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      return res.end('File not found: ' + reqPath);
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/ and http://192.168.1.2:${PORT}/`);
});
