const jwt = require("jsonwebtoken");
const SECRET = "hldsflsdfl";

async function generateAccessToken(payload) {
  return await jwt.sign(payload, SECRET, { expiresIn: "1800s" });
}

module.exports = {
  generateAccessToken,
};
