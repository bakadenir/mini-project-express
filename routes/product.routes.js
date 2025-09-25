import { Router } from "express";
import { create, findAll, findByName } from "../controller/product.controller.js";

const router = Router();

router.post("/", create); // only seller (divalidasi di controller)
router.get("/", findAll);
router.get("/:name", findByName);

export default router;
