const express = require("express");
const { createUser } = require("../controllers/userControleer");

const routerAPI = express.Router();
routerAPI.get("/", (req, res) => {
  return res.status(200).json("hello word");
});
routerAPI.post("/register", createUser);
module.exports = routerAPI; //export default
