import express from "express";

import {
  register,
  login,
  refreshAccessToken,
  logout,
} from "../controllers/authController.js";

import verifyAccessToken from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/userController.js";

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logout);

// Protected Route Example
router.get("/profile", verifyAccessToken, getProfile);

export default router;