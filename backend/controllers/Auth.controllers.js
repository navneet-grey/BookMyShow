require("dotenv").config();
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await userModel.findOne({ email: email });

  if (findUser) {
    return res.json({ message: "User already exists" });
  }
  const user = new userModel({ name, email, password });

  try {
    const doc = await user.save();
    const token = jwt.sign(
      { name, email, id: user.id },
      process.env.JWT_SECRET_KEY
    );

    res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      })
      .status(201)
      .json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

const loginUser = async (req, res) => {
  const user = req.user;
  res
    .cookie("jwt", user.token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .status(201)
    .json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
};

const checkUser = (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401);
  }
};

const logoutUser = (req, res) => {
  res
    .cookie("jwt", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .sendStatus(200);
};



module.exports = { createUser, loginUser, checkUser, logoutUser};