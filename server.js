import { createServer } from "vite";
import Koa from "koa";
import koaMount from "koa-mount";
import koaStatic from "koa-static";
import koaSendfile from "koa-sendfile";
import api from "./api.js";

const PORT = process.env.PORT || 8080;

switch (process.env.NODE_ENV) {
  case "development": {
    createServer({
      configureServer: [apiPlugin],
    }).listen(PORT, () => {
      console.log();
      console.log(`Dev server running at:`);
      console.log(`http://localhost:${PORT}/`);
      console.log();
    });
    break;
  }
  
  case "production": {
    const app = new Koa();
    app.use(koaStatic("dist"));
    app.use(koaMount("/api", api));
    app.use(catchAll);
    app.listen(PORT, () => {
      console.log();
      console.log(`Prod server running at:`);
      console.log(`http://localhost:${PORT}/`);
      console.log();
    });
    break;
  }
  
  default: {
    throw `Unknown NODE_ENV value: ${process.env.NODE_ENV}`;
    break;
  }
}

function apiPlugin({
  root, // project root directory, absolute path
  app, // Koa app instance
  server, // raw http server instance
  watcher, // chokidar file watcher instance
}) {
  app.use(koaMount("/api", api));
}

async function catchAll(ctx, next) {
  await koaSendfile(ctx, "./dist/index.html");
}
