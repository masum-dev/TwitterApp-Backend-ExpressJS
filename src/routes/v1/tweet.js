import express from "express";
import {
  createTweet,
  getTweets,
  getTweetsById,
} from "../../controllers/tweetController.js";
import { validate } from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

const route = express.Router();

route.get("/", getTweets);

route.get("/:id", getTweetsById);

route.post("/", validate(tweetZodSchema), createTweet);

export default route;
