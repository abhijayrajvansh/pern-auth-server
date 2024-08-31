import { config } from "dotenv";
config();

export const PORT = process.env.PORT as string;
export const SECRET = process.env.SECRET as string;
export const CLIENT_URL = process.env.CLIENT_URL as string;
export const SERVER_URL = process.env.SERVER_URL as string;
