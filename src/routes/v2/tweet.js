import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Hello from Tweet Router V2",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Tweet Router ID V2",
    id: req.params.id,
  });
});

export default router;
