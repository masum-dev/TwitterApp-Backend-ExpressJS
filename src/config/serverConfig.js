import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from .env file

export const PORT = process.env.PORT || 3000;
