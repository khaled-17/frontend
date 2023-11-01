// controllers/usersController.js
const userModel = require('../user/users.js');

const getUsers = (req, res) => {
  const users = userModel.getUsers();
  res.json(users);
};

module.exports = {
  getUsers,
};
