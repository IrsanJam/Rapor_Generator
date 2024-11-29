import express from 'express';
import { db } from '../config.mjs';

const router = express.Router();

router.post('/template/data/:id', async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    // Validasi input: key dan value harus ada
    if (!data) {
      return res.status(400).json({ error: 'masukan data yang disediakan' });
    }

    // Ambil data lama dari kolom `data`
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    // Parse data lama sebagai array (default adalah array kosong)
    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    // Validasi: Pastikan `existingData` adalah array
    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    // Tambahkan objek baru ke array
    existingData.push(data);

    // Perbarui kolom `data` di tabel
    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(existingData), id]);

    // Kirim respons sukses
    res.status(201).json({
      message: 'Data berhasil ditambahkan',
      data: existingData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menambahkan data',
      error: error.message,
    });
  }
});

router.get('/template/data/:id', async (req, res) => {
  try {
    const { id } = req.params; // Ambil id dari parameter URL

    // Ambil data dari kolom `data` pada tabel `templates` berdasarkan `id`
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    // Jika template tidak ditemukan, kirimkan respons 404
    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    // Parse data yang ada, jika data ada
    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    // Kirim respons sukses dengan data yang ditemukan
    res.status(200).json({
      data: existingData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message,
    });
  }
});

export default router;
