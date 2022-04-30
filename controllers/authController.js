import User from "../models/User.js";

const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
 
    res.status(201).json({ user });
  } catch (error) {
    //how to handle errors
    next(error)
  }
};

const login = (req, res) => {
  res.send("login user");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
