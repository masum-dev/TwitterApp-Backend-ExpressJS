import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Hello from Comment Router",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Comment Router ID",
    id: req.params.id,
  });
});

export default router;
