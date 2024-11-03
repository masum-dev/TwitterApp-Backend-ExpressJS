import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";

const app = express();

app.set("view engine", "ejs");

console.log("Printing... ", import.meta.dirname);

app.set("views", import.meta.dirname + "/views");

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.render("index", { name: "Mahbub Alam Masum" });
});

app.get("/ping", (req, res) => {
  return res.json({
    message: "Hi There",
  });
});

app.all("*", (req, res) => {
  return res.status(404).json({
    message: "Not Foundddd",
  });
});

app.listen(PORT, () => {
  console.log(`Serve started at ${PORT}`);
});
