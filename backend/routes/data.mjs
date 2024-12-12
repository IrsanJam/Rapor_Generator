import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // Untuk membuat ID unik
import { db } from '../config.mjs';

const router = express.Router();

// NOTE : Komponen itu adalah pilihan komponen seperti title, paraghraph, table dll

//Mendapatkan Semua Data Komponen
router.get('/template/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];
    const sortedData = existingData.sort((a, b) => a.position - b.position);
    res.status(200).json({
      data: sortedData,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data',
      error: error.message,
    });
  }
});

//Mendapatkan Komponen By ID
router.get('/template/data/:id/:itemId?', async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }
    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];
    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    if (itemId) {
      const item = existingData.find((item) => item.id === itemId);
      if (!item) {
        return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
      }
      return res.status(200).json({ data: item });
    }

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

// Membuat komponen
router.post('/template/data/:id', async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'Masukan data yang valid' });
    }

    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];
    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    const newPosition = existingData.length;
    const newData = { ...data, id: uuidv4(), position: newPosition };
    existingData.push(newData);
    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(existingData), id]);
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
    const { id, itemId } = req.params;
    const updatedData = req.body;

    if (!updatedData) {
      return res.status(400).json({ error: 'Masukkan data untuk diperbarui' });
    }
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];

    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    const itemIndex = existingData.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
    }

    existingData[itemIndex] = { ...existingData[itemIndex], ...updatedData };
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

router.delete('/template/data/:id/:itemId', async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];
    if (!Array.isArray(existingData)) {
      return res.status(500).json({ error: 'Data di database tidak valid (bukan array)' });
    }

    const updatedData = existingData.filter((item) => item.id !== itemId);
    if (existingData.length === updatedData.length) {
      return res.status(404).json({ error: `Item dengan ID ${itemId} tidak ditemukan` });
    }

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

router.patch('/template/update-positions/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedPositions = req.body;
    if (!Array.isArray(updatedPositions)) {
      return res.status(400).json({ error: 'Data posisi harus berupa array' });
    }
    const selectQuery = 'SELECT data FROM templates WHERE id = ?';
    const [rows] = await db.execute(selectQuery, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: `Template dengan ID ${id} tidak ditemukan` });
    }

    const existingData = rows[0].data ? JSON.parse(rows[0].data) : [];
    const updatedData = existingData.map((item) => {
      const updatedItem = updatedPositions.find((pos) => pos.id === item.id);
      return updatedItem ? { ...item, position: updatedItem.position } : item;
    });

    const updateQuery = 'UPDATE templates SET data = ? WHERE id = ?';
    await db.execute(updateQuery, [JSON.stringify(updatedData), id]);
    res.status(200).json({ message: 'Posisi berhasil diperbarui', data: updatedData });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat memperbarui posisi',
      error: error.message,
    });
  }
});

export default router;
