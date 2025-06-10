import { Router } from "express";
import authRouter from "./authRouter.js";
import projectRouter from "./projectRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

// Registering the routers
router.use("/api", authRouter);
router.use("/api", projectRouter);
router.use("/api", userRouter);

export default router;
