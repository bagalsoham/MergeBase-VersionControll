const express = require("express");
const router = express.Router();

// Example route (you can add more later)
router.get("/", (req, res) => {
  res.send("🚀 MergeBase backend is running!");
});

module.exports = router;
