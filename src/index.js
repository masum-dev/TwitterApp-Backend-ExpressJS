import express, { urlencoded } from "express";
import { PORT } from "./config/serverConfig.js";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({
    message: "You have hit at /",
  });
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
