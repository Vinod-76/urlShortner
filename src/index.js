const express = require("express");
const { userRoute } = require("./routes/userRoute/users");
const { urlRouter } = require("./routes/urlShortnerRoute/url");
const bodyParser = require("body-parser");
const { user } = require("./models/Users");
const { shortURl } = require("./models/Url");
const app = express();
const Port = 3000;
shortURl.sync();
user.sync();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * User Route to GET,POST,PATCH*/
app.use("/users", userRoute);
app.use("/url", urlRouter);

app.listen(Port, () => {
  console.log(`Server is running on Port:${Port}`);
});
