const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../schemas/User");
const { OAuth2Client } = require('google-auth-library');

router.post("/register", async (req, res) => {
  try {
    let { username,email,phonenumber,password} = req.body;



    if (!email || !password )
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    if (!username) username = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      phonenumber,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id },process.env.jwtSecret);
    if(token) return res
    .json({
      token,
      user: {
        id: user._id,
        username: user.username,
        pricing: user.pricing
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    console.log("isvalid : " + token);

    if (!token) return res.json({error_token: message});
    console.log("\nistoken : " + token);

    const verified = jwt.verify(token,process.env.jwtSecret);
    console.log("\nisverify : " + verified.id);

    if (!verified) return res.json({error_verified: message});

    const user = await User.findById(verified.id);
    if (!user) return res.json({error_user: message});

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error_catch: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
    pricing: user.pricing,
    email: user.email,
    phonenumber: user.phonenumber
  });
});
router.put("/update", async (req, res) => {
  const { id,pricing } = req.body;

  if (!id) {
    return res.status(400).json({ Msg: "Not all fields have been entered." });

  }
  User.findByIdAndUpdate(id, { pricing: pricing }).then(() => {
    User.findOne({ _id: id }).then((user) => {
      res.send(user);
      console.log(user)
    })
  })

})
;
const client = new OAuth2Client(process.env.CLIENT_ID);

router.post("/googlelogin", async (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.CLIENT_ID })
    .then( async (response) =>   {

      const { email_verified, name, email } = response.payload;
      console.log("payload name " + name + "\n");
      if (email_verified) {
        const user =  await User.findOne({ email: email });
        if (user) {
          const token = jwt.sign({ id: user._id }, process.env.jwtSecret);
      console.log("payload name " + user.username + "\n");
          if (token) {
            return res.json({
              token,
              user: user
            });
          }
          } else {
            let password = email + process.env.jwtSecret;
            newUser = new User({ username:name, email:email, phonenumber:null, password:password, pricing: "free" });
            const savedUser = await newUser.save();
              if (!savedUser) {
                console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with google'
                });
              }
              const token = jwt.sign( { id: savedUser._id }, process.env.jwtSecret);
              if (token)
              return res.json({
                token,
                user: {
                  id: savedUser._id,
                  username: savedUser.username,
                  pricing: data.pricing
                }
              });
          }

      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
});

module.exports = router;