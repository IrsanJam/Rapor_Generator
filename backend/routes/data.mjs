import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // Untuk membuat ID unik
import { db } from '../config.mjs';

const router = express.Router();

// router.post('/template/data/:id', async (req, res) => {
//   try {
//     const data = req.body;
//     const { id } = req.params;

//     // Validasi input: key dan value harus ada
//     if (!data) {
//       return res.status(400).json({ error: 'masukan data yang disediakan' });
//     }

//     // Ambil data lama dari kolom `data`
//     const selectQuery = 'SELECT data FROM templates WHERE id = ?';
//     const [rows] = await db.execute(selectQuery, [id]);

//     if (rows.length === 0) {
//       return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
//     }

//     // Parse data lama sebagai array (default adalah array kosong)
//     const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

//     // Validasi: Pastikan `existingData` adalah array
//     if (!Array.isArray(existingData)) {
//       return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
//     }

//     // Tambahkan objek baru ke array
//     existingData.push(data);

//     // Perbarui kolom `data` di tabel
//     const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
//     await db.execute(updateQuery, [JSON.stringify(existingData), id]);

//     // Kirim respons sukses
//     res.status(201).json({
//       message: 'Data berhasil ditambahkan',
//       data: existingData,
//     });
//   } catch (error) {
//     console.error('Server error:', error);
//     res.status(500).json({
//       message: 'Terjadi kesalahan saat menambahkan data',
//       error: error.message,
//     });
//   }
// });

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

router.get('/template/data/:id/:itemId?', async (req, res) => {
  try {
    const { id, itemId } = req.params;

    // Ambil data dari kolom `data` pada tabel `templates` berdasarkan `id`
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    // Jika template tidak ditemukan, kirimkan respons 404
    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    // Parse data yang ada, jika data ada
    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    // Jika `itemId` disediakan, cari data spesifik
    if (itemId) {
      const item = existingData.find((item) => item.id === itemId);
      if (!item) {
        return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
      }
      return res.status(200).json({ data: item });
    }

    // Jika `itemId` tidak disediakan, kirim seluruh data
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

router.post('/template/data/:id', async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    // Validasi input: key dan value harus ada
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Masukan data yang valid' });
    }

    // Tambahkan ID unik ke data baru
    const newData = { ...data, id: uuidv4() };

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
    existingData.push(newData);

    // Perbarui kolom `data` di tabel
    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(existingData), id]);

    // Kirim respons sukses
    res.status(201).json({
      message: 'Data berhasil ditambahkan',
      data: newData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menambahkan data',
      error: error.message,
    });
  }
});

router.patch('/template/data/:id/:itemId', async (req, res) => {
  try {
    const { id, itemId } = req.params; // ID template dan ID item yang ingin diperbarui
    const updatedData = req.body; // Data yang diperbarui

    if (!updatedData) {
      return res.status(400).json({ error: 'Masukkan data untuk diperbarui' });
    }

    // Ambil data dari database
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    // Temukan item berdasarkan itemId
    const itemIndex = existingData.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
    }

    // Update item
    existingData[itemIndex] = { ...existingData[itemIndex], ...updatedData };

    // Simpan perubahan ke database
    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(existingData), id]);

    res.status(200).json({
      message: 'Data berhasil diperbarui',
      data: existingData[itemIndex],
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat memperbarui data',
      error: error.message,
    });
  }
});

// DELETE - Menghapus item dari data
router.delete('/template/data/:id/:itemId', async (req, res) => {
  try {
    const { id, itemId } = req.params;

    // Ambil data dari database
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    // Hapus item berdasarkan itemId
    const updatedData = existingData.filter((item) => item.id !== itemId);

    if (existingData.length === updatedData.length) {
      return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
    }

    // Simpan perubahan ke database
    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(updatedData), id]);

    res.status(200).json({
      message: 'Data berhasil dihapus',
      data: updatedData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menghapus data',
      error: error.message,
    });
  }
});

export default router;
