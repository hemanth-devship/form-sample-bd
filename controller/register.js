var User = require('../models/mongodb')

module.exports = () => {
  let router = {};

  router.register = async (req, res) => {
    const data = req.body;

    const url = req.protocol + "://" + req.get("host");
    // const file = url + "/files/" + req.file.filename;

    // res.status(200).json({ ...data, profileImg: req.file.filename });

    try {
      const addUser = await new User.register({
        ...data,
        profileImg: req.file.filename,
      });
      await addUser.save();
      res.status(200).json({
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
  };

  return router;
};
