import express from "express";
import { logOut, login, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login",login)
router.post("/signup",signUp)
router.post("/logout",logOut)

export default router;