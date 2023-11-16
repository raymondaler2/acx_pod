const AuthenticateToken = require("./../../../middleware/AuthenticateToken/index.jsx");
const express = require("express");

const {
  getAllSop,
  getSopById,
  addSop,
  updateSop,
  deleteSop,
} = require("../../../controllers/Sop");

const router = express.Router();

// * SOP calls
router.get("/", AuthenticateToken, getAllSop);
router.get("/:id", AuthenticateToken, getSopById);
router.post("/", AuthenticateToken, addSop);
router.put("/:id", AuthenticateToken, updateSop);
router.delete("/:id", AuthenticateToken, deleteSop);

module.exports = router;
