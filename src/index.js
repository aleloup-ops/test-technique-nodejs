const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const dotenv = require("dotenv");

const appRoutes = require('./routes');

const dbConfig = require("./config/db.config");
const db = require("./models");

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


/*app.use(
  cookieSession({
    name: "node-test-session",
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true
  })
);*/

app.use('/', appRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});