import express from "express";
import { body } from "express-validator";
import { signIn, signUp } from "../controllers/user.controller.js"; // Adjust the path if needed

const router = express.Router();

// Validation rules for sign-up
const signUpValidation = [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Must be a valid email").normalizeEmail(),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("contact").optional().isNumeric().withMessage("Contact number must be numeric"),
];

// Route for signing up
router.post("/signup", signUpValidation, signUp);

// Route for signing in
router.post("/signin", signIn);

export default router;