const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check,validationResult } = require('express-validator');
const UserSchema = require('../schemas/User');
const config = require('config');

router.post(
    '/register',
    [
        check('email','E-mail is required').isEmail(),
        check('password','Password is required').notEmpty()
    ],
    async (req,res) =>{
        try{

            let { username,email,phonenumber,password } = req.body;
            let user = await UserSchema.findOne({  email });
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({ errors:errors.array()});
            }
            if(user){
                return res.status(401).json({ msg: "User already exists"});
            }

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password,salt);

            user = new UserSchema({
                username,
                email,
                phonenumber,
                password
            });

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                    
                }
            }
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                (err,token) =>{
                    if(err) throw err;
                    res.json({ token });
                }

            )
            //res.send("cred received");

        } catch(error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..."});
        }
    
    }
)
module.exports = router;