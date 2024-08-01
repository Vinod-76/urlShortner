const express = require("express");
const { userController } = require("../../controllers/userController/users");
const { createUserValidation } = require("./dto/createUser.dto");
const { loginValidation } = require("./dto/loginUser.dto");
const { jwtTokeVerfiy } = require("../../middleware/jwtTokeVerfiy");
const userRoute = express.Router();

userRoute.get("/", jwtTokeVerfiy, userController.fetchAllUsers);
userRoute.post("/register", createUserValidation, userController.createUser);
userRoute.post("/login", loginValidation, userController.loginUser);

module.exports = { userRoute };
