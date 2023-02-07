import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomImage } from "../functions/index.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(email))
      res.json({ msg: "Email field must have email format." });

    const user = await User.findOne({ email: email });

    if (user) res.json({ msg: "This user already exists." });

    if (password.length < 8)
      res.json({ msg: "Password must have at least 8 characters." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath: randomImage(),
      viewedProfile: 0,
      impressions: 0,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
