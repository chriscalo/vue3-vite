const { createServer } = require("vite");
const Koa = require("koa");
const mount = require("koa-mount");
const api = require("./api.js");
const os = require("os");

function apiPlugin({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher, // chokidar file watcher instance
}) {
  app.use(mount("/api", api));
}

const PORT = process.env.PORT || 8080;

createServer({
  configureServer: [apiPlugin],
}).listen(PORT, () => {
  console.log();
  console.log(`Dev server running at:`);
  console.log(`http://localhost:${PORT}/`);
  console.log();
});
