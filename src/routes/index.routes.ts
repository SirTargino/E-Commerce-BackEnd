import { Router } from "express";
import { productRouter } from "./product.routes";

export const router = Router();

router.use("/api/products", productRouter);