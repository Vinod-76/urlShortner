const jwt = require("jsonwebtoken");
const SECRET = "hldsflsdfl";
async function jwtTokeVerfiy(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (!token) res.sendStatus(401);
    const check = jwt.verify(token, SECRET);
    if (check) next();
  } catch (error) {
    return res.status(401).json({ status: "unauthorized" });
  }
}

module.exports = {
  jwtTokeVerfiy,
};
