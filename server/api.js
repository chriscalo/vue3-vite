import express from "express";

const api = express();

api.use("/", (req, res, next) => {
  const url = req.url;
  res.type("application/json");
  res.send(`Hello, World! url = ${ url }`);
});

export default api;
