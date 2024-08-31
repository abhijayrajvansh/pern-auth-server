import {
  register,
  login,
  deleteUser,
} from "../controllers/authControllers";
import { Router } from "express";
import validate from "../middlewares/validate";
import { authSchema } from "../validators/authValidators";

const router = Router();

router.post("/register", validate(authSchema), register);
router.post("/login", validate(authSchema), login);
router.delete("/delete", deleteUser);

export default router;
