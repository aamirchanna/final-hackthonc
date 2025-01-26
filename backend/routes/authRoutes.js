import express from "express";
import { registerController,testController } from "../controllers/authController.js";
import { loginController } from "../controllers/loginController.js";
import { requireSignIn } from "../middlewares/authmiddleware.js";
const router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login a user
router.post("/login", loginController);

// test route
router.get("/test", requireSignIn, testController);



export default router;
