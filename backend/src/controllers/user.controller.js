import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const getUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json(allUsers);
});

export const createUser = asyncHandler(async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const newUser = await User.create({
    username,
    password,
    firstName,
    lastName,
  });
  res.status(201).json(newUser);
});
