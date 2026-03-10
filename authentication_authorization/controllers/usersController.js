const users = require("../models/usersModel.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// const str = "sharath";

// let hashed = bcryptjs.hashSync(str, 12)

// const ab = bcryptjs.hashSync(str, 14)

// console.log(hashed)
// const a = "tom"
// console.log(bcryptjs.compareSync(ab, hashed)) //  string -> encrypt str === hashed

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkEmail = await users.findOne({ email: email });
    if (checkEmail) {
      return res.status(409).json({ message: "email already existed" });
    } else {
      const encryptPassword = await bcryptjs.hash(password, 12);
      const createUser = await users.create({
        name: name,
        email: email,
        password: encryptPassword,
      });
      res
        .status(200)
        .json({ message: "user signup successfully", data: createUser });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "invalid email/password" });
    }
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (checkPassword) {
      const token = await jwt.sign(
        { userInfo: user },
        process.env.jwt_secret_key,
        { expiresIn: "5m", algorithm: "HS256" },
      );
      return res
        .status(200)
        .json({ message: "login successful", data: user, token: token });
    } else {
      return res.status(400).json({ message: "invalid email/password" });
    }
    // checkPassword === true ? res.status(200).json({message:"login successful", data:user}) : res.status(400).json({message:"invalid email/password"})
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

exports.users = async (req, res) => {
  try {
    // const token = req.headers.authorization.slice(7)
  
    const data = await users.find()
    res
      .status(200)
      .json({ message: "users list fetched successfully", data: data });
     
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
