var express = require("express");
var processFile = require("../upload/processFile");
var User = require("../models/register.model");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", processFile, async (req, res) => {
  const data = req.body;

  const url = req.protocol + "://" + req.get("host");
  // const file = url + "/files/" + req.file.filename;

  // res.status(200).json({ ...data, profileImg: req.file.filename });

  try {
    const addUser = await new User({ ...data, profileImg: req.file.filename });
    await addUser.save();
    res
      .status(200)
      .json({
        message: "User Added",
        user: {
          firstName: addUser._doc.firstName,
          lastName: addUser._doc.lastName,
          gender: addUser._doc.gender,
          userName: addUser._doc.userName,
          email: addUser._doc.email,
          profileImg: `${url}/images/${addUser._doc.profileImg}`,
        },
      });
  } catch (error) {
    res.status(400).json({ message: "Somting went wrong" });
  }
});

module.exports = router;
