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

router.get("/", AuthenticateToken, getAllUsers);
router.get("/:id", AuthenticateToken, getUserById);
router.post("/", AuthenticateToken, addUser);
router.put("/:id", AuthenticateToken, updateUser);
router.delete("/:id", AuthenticateToken, deleteUser);
router.post("/login", loginUser);

module.exports = router;
