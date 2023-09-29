var User = require('../models/mongodb')

module.exports = () => {
  let loginRouter = {};

  loginRouter.login = async (req, res) => {
    let { email, password } = req.body;

    try {
      const user = await User.register.findOne({ email });
      if (!user) return res.status(400).json({ message: "email not registered" });
      if (user.password !== password)
        return res.status(400).json({ message: "password incorrect" });

      res.status(200).json({
        message: "You are successfully logged in",
        user_id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } catch (error) {
      res.status(400).json({ message: "Somting went wrong" });
    }
  };

  return loginRouter;
};
