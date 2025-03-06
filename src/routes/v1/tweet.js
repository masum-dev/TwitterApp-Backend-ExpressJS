import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    message: "You have hit at /api/v1/tweets",
  });
});

route.get("/:id", (req, res) => {
  res.json({
    message: `You have hit at /api/v1/tweets/${req.params.id}`,
    id: req.params.id,
  });
});

export default route;
