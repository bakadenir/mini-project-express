import { Router } from "express";
import { create, findAll, findByUsername } from "../controller/user.controller.js";

const router = Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:username", findByUsername);

export default router;
