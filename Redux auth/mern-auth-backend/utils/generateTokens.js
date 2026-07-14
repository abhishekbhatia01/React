import jwt from "jsonwebtoken";

/**
 * Generate Access Token
 * Expires in 15 minutes (or whatever is in .env)
 */
export const generateAccessToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    }
  );
};

/**
 * Generate Refresh Token
 * Expires in 7 days (or whatever is in .env)
 */
export const generateRefreshToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    }
  );
};