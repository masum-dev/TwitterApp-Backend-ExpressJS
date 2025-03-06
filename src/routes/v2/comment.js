import express from "express";
import {
  getComments,
  getCommentsById,
} from "../../controllers/commentController.js";

const route = express.Router();

route.get("/", getComments);

route.get("/:id", getCommentsById);

export default route;
