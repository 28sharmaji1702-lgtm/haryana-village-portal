const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    return res.json({
      success: true,
      message: "Login Successful"
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid Username or Password"
  });
});

module.exports = router;
