const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter First Name"],
    },
    last_name: {
      type: String,
      required: [true, "Please enter Last Name"],
    },
    birthday: {
      type: Date,
      required: [true, "Please enter Birthday"],
    },
    address: {
      type: String,
      required: [true, "Please enter Address"],
    },
    contact: {
      type: Number,
      required: [true, "Please enter Contact"],
    },
    email: {
      type: String,
      required: [true, "Please enter Email"],
    },
    emergency_contact: {
      type: Number,
      required: [true, "Please enter Emergency Contact"],
    },
    cv: {
      type: String,
      required: [true, "Please enter CV"],
    },
    username: {
      type: String,
      required: [true, "Please enter Username"],
    },
    password: {
      type: String,
      required: [true, "Please enter Password"],
    },
    work_email: {
      type: String,
      required: [true, "Please enter Work Email"],
    },
    position: {
      type: String,
      required: [true, "Please enter Position"],
    },
    user_role_id: {
      type: String, // Assuming user_role_id is of type String, adjust if needed
      required: [true, "Please enter User Role ID"],
    },
    pod_id: {
      type: String, // Assuming pod_id is of type String, adjust if needed
      required: [true, "Please enter Pod ID"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  // Hash the password only if it is modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
