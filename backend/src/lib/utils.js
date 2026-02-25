import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

     const isProduction = process.env.NODE_ENV === "production";

  // res.cookie("jwt", token, {
  //   maxAge: 7 * 24 * 60 * 60 * 1000,
  //   httpOnly: true,
  //   secure: isProduction,            // HTTPS only in production
  //   sameSite: isProduction ? "none" : "lax", // CRITICAL FIX
  // });

  res.cookie("jwt", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
});

    return token;
};
