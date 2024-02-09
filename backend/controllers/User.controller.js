const userModel = require("../models/User.model");


const fetchUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id).exec();

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {}
};

module.exports = { fetchUserById };