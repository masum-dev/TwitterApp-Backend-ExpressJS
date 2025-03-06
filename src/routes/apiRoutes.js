import express from "express";
import v1Routes from "./v1/v1Routes.js";
import v2Routes from "./v2/v2Routes.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "You have hit at /api",
  });
});

// route.use("/v1", v1Routes);

route.use("/v2", v2Routes);

export default route;
