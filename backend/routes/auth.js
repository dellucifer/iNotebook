const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    
  }
);

module.exports = router;
