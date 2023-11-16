const AuthenticateToken = require("./../../../middleware/AuthenticateToken/index.jsx");
const express = require("express");

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../../../controllers/User");

const router = express.Router();

// * User calls
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// * Login route
router.post("/login", loginUser);
router.get("/protected-route", AuthenticateToken, (req, res) => {
  res.json({ message: "This is a protected route" });
});

module.exports = router;
