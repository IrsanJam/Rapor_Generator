import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// export const urlPort = process.env.URL_PORT || 5555;
// export const mongoDBURL = process.env.MONGODB_URL;
export const jwtSecret = process.env.JWT_SECRET;
export const cloudName = process.env.CLOUD_NAME;
export const cloudApiKey = process.env.CLOUD_API_KEY;
export const cloudApiSecret = process.env.CLOUD_API_SECRET;

export const urlPort = process.env.URL_PORT || 5555;
export const mysqlDBConfig = {
  host: 'localhost', // Atau alamat host database
  user: 'root', // Ganti dengan username MySQL kamu
  password: 'secret', // Ganti dengan password MySQL kamu
  database: 'report_gen', // Ganti dengan nama database kamu
};

export const db = await mysql.createPool(mysqlDBConfig);
