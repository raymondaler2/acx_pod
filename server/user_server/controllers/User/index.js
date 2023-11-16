const error = require("../../middleware/Error");
const User = require("../../models/User");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(`Get All Users ERROR: `, error);
  }
});

const getUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(`Get User by Id ERROR: `, error);
  }
});

const addUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(`Add User ERROR: `, error);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(404);
      throw new Error(`Update User ERROR: User with ID ${id} not found`);
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500);
    throw new Error(`Update User ERROR: `, error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404);
      throw new Error(`Delete User ERROR: User with ID ${id} not found`);
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(`Delete User ERROR: `, error);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    console.log("%c Line:71 🍌 req.body", "color:#2eafb0", req.body);
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
      res.status(400);
      throw new Error("Email or username and password are required for login");
    }

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user && (await user.matchPassword(password))) {
      const secretKey = process.env.JWT_SECRET; // Read the JWT_SECRET from the environment variable

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        secretKey,
        { expiresIn: "720h" }
      );

      res.status(200).json({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or username or password");
    }
  } catch (error) {
    console.log("🚨⚠️❗🚩", error);
    res.status(500);
    throw new Error(`User Login ERROR: `, error);
  }
});

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};
