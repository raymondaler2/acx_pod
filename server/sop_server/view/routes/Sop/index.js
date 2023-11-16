const express = require("express");
const Sop = require("../../../models/Sop");
const {
  getAllSop,
  getSopById,
  addSop,
  updateSop,
  deleteSop,
} = require("../../../controllers/Sop");

const router = express.Router();

// * SOP calls
router.get("/", getAllSop);
router.get("/:id", getSopById);
router.post("/", addSop);
router.put("/:id", updateSop);
router.delete("/:id", deleteSop);

module.exports = router;
