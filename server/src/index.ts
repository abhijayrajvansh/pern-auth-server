import { PORT } from "./configs";
import express from "express";
import authRoutes from "./routes/authRoutes";
import apiRoutes from './routes/apiRoutes';
import { authMiddleware } from "./middlewares/authMiddleware";
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())
app.use('/auth', authRoutes)
app.use('/api', authMiddleware, apiRoutes)

try {
  app.listen(PORT, () => {
    console.log(`> server is running at http://localhost:${PORT}/`);
  });
} catch (error) {
  console.log("error: ", error.message);
}
