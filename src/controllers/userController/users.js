const { user } = require("../../models/Users");
const { validationResult } = require("express-validator");
const { hash } = require("../../utils/bcrypt");
const { generateAccessToken } = require("../../utils/token");

const userController = {
  fetchAllUsers: async function (req, res) {
    try {
      const fetchAllUsers = await user.findAll();
      return res.json({ status: 200, message: "success", data: fetchAllUsers });
    } catch (error) {
      return res.json({ status: 500, message: error });
    }
  },
  createUser: async function (req, res) {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const { firstName, lastName, email, password } = req.body;
      const hashPassword = await hash.make(password);
      const userCreated = await user.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });
      const lastInsertedid = userCreated.id;
      return res.json({
        status: 201,
        message: "success",
        data: lastInsertedid,
      });
    } catch (err) {
      return res.json({
        status: 500,
        message: err,
      });
    }
  },
  loginUser: async function (req, res) {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const { email, password } = req.body;
      const findUser = await user.findOne({ where: { email: email } });
      const check = await hash.compare(password, findUser.dataValues.password);
      if (!check) {
        throw Error;
      }
      const payload = {
        email: findUser.dataValues.email,
        id: findUser.dataValues.id,
      };
      const token = await generateAccessToken(payload);
      return res.json({
        id: findUser.dataValues.id,
        token: token,
        date: new Date().toString(),
      });
    } catch (error) {
      return res.json({ status: 500, message: error });
    }
  },
};

module.exports = {
  userController,
};
