const Koa = require("koa");

const api = new Koa();

api.use(async ctx => {
  ctx.response.type = "application/json";
  ctx.body = {
    data: "Hello, World!",
  };
});

module.exports = api;
