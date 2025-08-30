const express = require("express");
const router = express.Router();
const userRouter = require("./user.router");
const mainRouter = require("./user.router");

mainRouter.use("/user", userRouter);
// Example route (you can add more later)
router.get("/", (req, res) => {
  res.send("🚀 MergeBase backend is running!");
});



module.exports = router;
