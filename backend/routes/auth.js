const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');

const JWT_SEC = "awesome"

//Creating a user using: POST "/api/auth/createuser" No login required
router.post(
  "/createuser",
  [
    body("name", "Username must be of atleast 5 characters").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be of atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //If error exists, then return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    //check whether the user with same email exists or not
    try {
        let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error: "Email already exists"})
    }

    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)
    //Create a new user
    user = await User.create({
      name: req.body.name,
      email: secPass,
      password: req.body.password,
    })
    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SEC)
    res.json({authToken})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    
  }
);

module.exports = router;
