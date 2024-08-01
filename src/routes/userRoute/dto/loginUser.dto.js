const { body } = require("express-validator");

const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("email must be a valid address"),
  body("password").notEmpty().withMessage("password must be required"),
];

module.exports = {
  loginValidation,
};
