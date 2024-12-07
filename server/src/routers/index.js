import { Router } from "express";
import authRouter from "./authRouter.js";
import projectRouter from "./projectRouter.js";
import userRouter from "./userRouter.js"; // Sửa lại đường dẫn

const router = Router();

router.use("/api", authRouter);
router.use("/api", projectRouter);
router.use("/api", userRouter); // Sửa lại đường dẫn

export default router;
