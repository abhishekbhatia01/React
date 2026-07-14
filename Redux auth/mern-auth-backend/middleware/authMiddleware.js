import jwt from "jsonwebtoken";

const verifyAccessToken = (req, res, next) => {
  try {
    // Authorization: Bearer xxxxxxxxxxx
    const authHeader = req.headers.authorization;

    // Check if header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access Token Missing",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    // Save userId for next controller
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Access Token",
    });
  }
};

export default verifyAccessToken;