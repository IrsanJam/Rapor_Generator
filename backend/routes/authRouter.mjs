import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { db } from '../config.mjs';

dotenv.config();
const router = express.Router();
// Konfigurasi koneksi database MySQL

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ id: result.insertId, username, email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) return res.status(404).json('User not found');
    const user = rows[0];

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json('Wrong password');

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const { username } = user;
    res.status(200).json({ username, email, accessToken });
  } catch (err) {
    res.status(500).json({ message: "You're not connected" });
  }
});

export default router;
