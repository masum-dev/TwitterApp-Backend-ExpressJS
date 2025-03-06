import express from "express";
import { getTweets, getTweetsById } from "../../controllers/tweetController.js";

const route = express.Router();

route.get("/", getTweets);

route.get("/:id", getTweetsById);

export default route;
