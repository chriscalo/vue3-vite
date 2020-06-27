import express from "express";

import api from "./api.js";
import ui from "./ui.js";

const server = express();
server.use("/api", api);
server.use(ui);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log();
  console.log(`Server running at:`);
  console.log(`http://localhost:${PORT}/`);
  console.log();
});
