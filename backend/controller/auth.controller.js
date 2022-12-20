require("dotenv").config();
const db = require("../server");
const userColl = db.collection("users");
const bcrypt = require("bcrypt");
const httpStatus = require("http-status");

const generatePassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const registration = async (req, res, next) => {
  const data = req.body;
  const email = { email: req.body.email };
  const user = await userColl.findOne(email);
  try {
    if (user) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "User already exists",
        code: httpStatus.BAD_REQUEST,
      });
    } else {
      const newUser = await userColl.insertOne({
        ...data,
        password: generatePassword(req.body.password),
      });

      return res.status(httpStatus.OK).json({
        message: "Registration successful",
        code: httpStatus.OK,
        data: newUser.value,
      });
    }
  } catch (error) {
    return res.status(httpStatus.ERROR).json({
      message: error.message,
      code: httpStatus.ERROR,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { password } = req.body;
    const reqData = { email: req.body.email };
    let user = await userColl.findOne(reqData);
    if (!user || user.password == null) {
      const message = `Incorrect email or password.`;
      return res.status(httpStatus.FORBIDDEN).send({
        message,
        code: httpStatus.FORBIDDEN,
        data: null,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      let message = `Login successful.`;
      return res.status(httpStatus.OK).json({
        message: message,
        code: httpStatus.OK,
        data: user,
      });
    } else {
      const message = `Incorrect email or password.`;
      return res.status(httpStatus.FORBIDDEN).json({
        message,
        code: httpStatus.FORBIDDEN,
        data: null,
      });
    }
  } catch (error) {
    return res.status(httpStatus.ERROR).json({
      message: error.message,
      code: httpStatus.ERROR,
      data: null,
    });
  }
};

module.exports = {
  registration,
  login,
};
