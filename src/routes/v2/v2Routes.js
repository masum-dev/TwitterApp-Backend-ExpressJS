import express from "express";
import tweetRouter from "./tweet.js";
import commentRouter from "./comment.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "You have hit at /api/v2",
  });
});

route.use("/tweets", tweetRouter);
route.use("/comments", commentRouter);

export default route;
