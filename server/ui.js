import { resolve } from "path";
import { createServer as createViteDevServer } from "vite";
import express from "express";
import fallback from "express-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";
import { findPort } from "express-start/find-port";

const PORT = process.env.PORT || 8080;

const server = express();

switch (process.env.NODE_ENV) {
  case "development": {
    proxyViteDevServer(server);
    break;
  }
  case "production": {
    prodStaticFiles(server);
    break;
  }
  default: {
    throw new Error(`Unknown NODE_ENV value: ${process.env.NODE_ENV}`);
    break;
  }
}

async function proxyViteDevServer(server) {
  const port = await findPort(PORT + 1);
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
}

function prodStaticFiles(server) {
  const distDir = resolve(__dirname, "../dist");
  const htmlEntryPoint = resolve(distDir, "./index.html");
  
  server.use(express.static(distDir));
  server.use(fallback(htmlEntryPoint));
}

export default server;
