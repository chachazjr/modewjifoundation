const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "public");
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8"
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8", "Allow": "GET, HEAD" });
    return res.end("Njia hii bado haijawashwa kwenye toleo la majaribio.");
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    res.writeHead(400);
    return res.end("Ombi si sahihi.");
  }

  if (pathname === "/") pathname = "/index.html";
  const target = path.resolve(ROOT, "." + pathname);
  if (!target.startsWith(ROOT + path.sep) && target !== path.join(ROOT, "index.html")) {
    res.writeHead(403);
    return res.end("Ruhusa imekataliwa.");
  }

  fs.stat(target, (error, stats) => {
    if (error || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Ukurasa haujapatikana.");
    }
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(target)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY",
      "Cache-Control": "no-store"
    });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(target).pipe(res);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Modewji Foundation demo inapatikana kwenye http://localhost:" + PORT);
});