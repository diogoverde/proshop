import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

/**
 * @desc    Auth user and get token
 * @route   POST /api/users/login
 * @access  Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //res.send({ email, password });
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401); //Unauthorized
    throw new Error("Email or password is invalid");
  }
});

export { authUser };
