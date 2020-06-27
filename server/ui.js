import { createServer } from "vite";
import express from "express";
import fallback from "express-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";

// TODO: find available port
const PORT = process.env.PORT || 8080;
const VITE_DEV_SERVER_PORT = PORT + 1;
const VITE_DEV_SERVER_ADDR = `http://localhost:${VITE_DEV_SERVER_PORT}`;

const server = express();

switch (process.env.NODE_ENV) {
  case "development": {
    createServer().listen(VITE_DEV_SERVER_PORT, () => {
      console.log();
      console.log(`Vite dev server running at:`);
      console.log(`http://localhost:${VITE_DEV_SERVER_PORT}/`);
      console.log();
    });
    
    server.use(createProxyMiddleware({
      target: VITE_DEV_SERVER_ADDR,
      ws: true,
    }));
    break;
  }
  
  case "production": {
    server.use(express.static("dist"));
    server.use(fallback(`${__dirname}/dist/index.html`));
    break;
  }
  
  default: {
    throw `Unknown NODE_ENV value: ${process.env.NODE_ENV}`;
    break;
  }
}

export default server;
