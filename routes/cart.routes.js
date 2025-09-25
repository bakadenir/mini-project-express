import { Router } from "express";
import { addItem, removeItem, getCart } from "../controller/cart.controller.js";

const router = Router();

router.post("/:username/add", addItem);
router.post("/:username/remove", removeItem);
router.get("/:username", getCart);

export default router;
