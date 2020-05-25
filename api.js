import Koa from "koa";

const api = new Koa();

api.use(async ctx => {
  ctx.response.type = "application/json";
  ctx.body = {
    data: "Hello, World!",
  };
});

export default api;
