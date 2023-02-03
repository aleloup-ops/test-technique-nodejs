const dotenv = require("dotenv").config({ path: __dirname + "../.env" });
module.exports = {
    secret: process.env.JWT_SECRET
};