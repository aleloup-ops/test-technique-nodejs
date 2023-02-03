const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const appRoutes = require('./routes');

const dbConfig = require("./config/db.config");
const db = require("./models");


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

dotenv.config();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(process.env.MONGO_CONNSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(process.env.JWT_SECRET);
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(
  cookieSession({
    name: "node-test-session",
    secret:  process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true
  })
);

app.use('/api', appRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});