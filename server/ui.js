import path from "path";
import { createServer as createViteDevServer } from "vite";
import express from "express";
import fallback from "express-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";

const PORT = process.env.PORT || 8080;
// FIXME: find available port
const VITE_DEV_SERVER_PORT = PORT + 1;

const server = express();

switch (process.env.NODE_ENV) {
  case "development": {
    server.use(dev(VITE_DEV_SERVER_PORT));
    break;
  }
  case "production": {
    server.use(prod());
    break;
  }
  default: {
    throw new Error(`Unknown NODE_ENV value: ${process.env.NODE_ENV}`);
    break;
  }
}

function dev(port = 3000) {
  const server = express();
  const VITE_DEV_SERVER_ADDR = `http://localhost:${port}`;
  
  createViteDevServer().listen(port, () => {
    console.log();
    console.log(`Vite dev server running at:`);
    console.log(VITE_DEV_SERVER_ADDR);
    console.log();
  });
  
  server.use(createProxyMiddleware({
    target: VITE_DEV_SERVER_ADDR,
    ws: true,
  }));
  
  return server;
}

function prod() {
  const server = express();
  const distDir = path.resolve("dist");
  const htmlEntry = path.resolve(distDir, "./index.html");
  
  server.use(express.static(distDir));
  server.use(fallback(htmlEntry));
  
  return server;
}

export default server;
