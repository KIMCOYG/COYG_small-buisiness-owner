import bcrypt from "bcrypt";
import passport from "passport";
import models from "../models";
const User = models.User;

export const getProfile = (req, res, next) => {
  res.send({
    user: req.user,
  });
};

export const postJoin = async (req, res, next) => {
  const { email, password, name, phone, role } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.send({ message: "가입된 이메일입니다." });
    }
    const hash = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hash,
      name,
      phone,
      role,
      enabled: true,
    });
    return res.send({ result, message: hash });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

//LocalStrategy
export const localLogin = async (email, password, done) => {
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      const result = await bcrypt.compare(password, exUser.password);
      if (result) {
        done(null, exUser);
      } else {
        done(null, false, { message: "비밀번호가 일치하지 않습니다." });
      }
    } else {
      done(null, false, { message: "가입되지 않은 회원입니다." });
    }
  } catch (error) {
    console.error(error);
    done(error);
  }
};

//globalRouter
export const postLogin = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash("loginError", info.message);
      return res.send(info.message);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.send({ message: "로그인 성공" });
    });
  })(req, res, next);
};
