const error = require("../../middleware/Error");
const Sop = require("../../models/Sop");
const asyncHandler = require("express-async-handler");

/* 
    FUNCTIONS:
    - Get All SOP
    - Get SOP by Id
    - Add SOP
    - Update SOP
    - Delete SOP
*/

// ! Get All SOP
const getAllSop = asyncHandler(async (req, res) => {
  try {
    const sops = await Sop.find();
    res.status(200).json(sops);
  } catch (error) {
    res.status(500);
    throw new Error(`Get All SOP ERROR: `, error);
  }
});

// ! Get SOP by Id
const getSopById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const sop = await Sop.findById(id);
    res.status(200).json(sop);
  } catch (error) {
    res.status(500);
    throw new Error(`Get SOP by Id ERROR: `, error);
  }
});

// ! Add SOP
const addSop = asyncHandler(async (req, res) => {
  try {
    const sop = await Sop.create(req.body);
    res.status(200).json(sop);
  } catch (error) {
    res.status(500);
    throw new Error(`Add SOP ERROR: `, error);
  }
});

// ! Update SOP
const updateSop = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const sop = await Sop?.findByIdAndUpdate(id, req.body);
    if (!sop) {
      res.status(404);
      throw new Error(`Update SOP ERROR: SOP with ID ${id} not found`);
    }
    const updated_sop = await Sop.findById(id);
    res.status(200).json(updated_sop);
  } catch (error) {
    res.status(500);
    throw new Error(`Update SOP ERROR: `, error);
  }
});

// ! Delete SOP
const deleteSop = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const sop = await Sop.findByIdAndDelete(id, req);
    if (!sop) {
      res.status(404);
      throw new Error(`Delete SOP ERORR: SOP with ID ${id} not found`);
    }
    res.status(200).json(sop);
  } catch (error) {
    res.status(500);
    throw new Error(`Delete SOP ERORR: `, error);
  }
});

module.exports = {
  getAllSop,
  getSopById,
  addSop,
  updateSop,
  deleteSop,
};
