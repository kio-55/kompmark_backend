import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import secret from "../config.js";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "User with same name already exists" });
      }
      const salt = bcrypt.genSaltSync(process.env.HASH_ROUNDS || 5);
      const hashPassword = bcrypt.hashSync(password, salt);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "registration complete" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Registrarion error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(404)
          .json({ message: `Username or password incorrect` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res
          .status(404)
          .json({ message: `Username or password incorrect` });
      }
      const token = generateAccessToken(user._id, user.roles);
      res.json({ token: token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Login error" });
    }
  }

  async whoami(req, res) {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({
          message: "Пользователь не найден",
        });
      }

      const { password, roles, ...userData } = user._doc;

      res.json({
        ...userData,
    });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Login error" });
    }
  }
}

export default new authController();
