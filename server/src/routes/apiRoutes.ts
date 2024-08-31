import {
  dashboard,
  getUsers,
  profile
} from "../controllers/apiControllers";
import { Router } from "express";

const router = Router();

router.get("/dashboard", dashboard);
router.get("/profile", profile);
router.get("/users", getUsers);

export default router;


// fetch('http://localhost:8080/api/profile', {
//   method: 'GET',
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhYmhpamF5QGdtYWlsLmNvbSIsImlhdCI6MTcyMDQzOTExMX0.ae1h5QDeVKcUK5FViBhBBiS3v9M_W_M9OsIZoOSW_RY"
//   }
// })
// .then(data => data.json())
// .then(res => console.log(res))
// .catch(error => console.error(error))