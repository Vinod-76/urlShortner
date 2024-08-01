const { body } = require("express-validator");
const createUserValidation = [
  body("firstName")
    .isString()
    .withMessage("First name must be string.")
    .notEmpty()
    .withMessage("First name is required."),
  body("lastName")
    .optional()
    .isString()
    .withMessage("Last name must be a string."),
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email must be a valid email address."),
  body("password")
    .isString()
    .withMessage("password must be string.")
    .notEmpty()
    .withMessage("password is required."),
];

module.exports = {
  createUserValidation,
};
