import { createServer } from "vite";
import express from "express";
import fallback from "express-history-api-fallback";
import { createProxyMiddleware } from "http-proxy-middleware";

import api from "./api.js";
import ui from "./ui.js";

const PORT = process.env.PORT || 8080;
const VITE_DEV_SERVER_PORT = PORT + 1;
const VITE_DEV_SERVER_ADDR = `http://localhost:${VITE_DEV_SERVER_PORT}`;

const server = express();
server.use("/api", api);
server.use(ui);

// the general server
server.listen(PORT, () => {
  console.log();
  console.log(`Server running at:`);
  console.log(`http://localhost:${PORT}/`);
  console.log();
});
