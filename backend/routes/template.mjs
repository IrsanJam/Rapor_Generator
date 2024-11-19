import express from 'express';
import { db } from '../config.mjs';
import pdf from 'html-pdf-node';

const router = express.Router();

router.get('/template', async (req, res) => {
  try {
    const query = 'SELECT * FROM templates';
    const [result, fields] = await db.query(query); // Gunakan async/await untuk query
    if (result.length === 0) {
      return res.status(200).json({ message: 'No templates found' });
    }

    return res.status(200).json(result); // Mengembalikan semua template yang ada
  } catch (error) {
    console.error('Error in the server route:', error);
    return res.status(500).json({ message: 'Error fetching templates', error });
  }
});

// router.get('/template', async (req, res) => {
//   try {
//     const userId = req.query.id; // Ambil userId dari query parameter
//     if (!userId) {
//       return res.status(400).json({ message: 'User ID is required' });
//     }
//     const query = 'SELECT * FROM templates WHERE id = ?';
//     const [result] = await db.execute(query, [userId]);

//     if (result.length === 0) {
//       return res.status(200).json({ message: 'There is no template' });
//     }
//     return res.status(200).json(result[0]); // Mengembalikan template yang ditemukan
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Error fetching data' });
//   }
// });

router.get('/template', async (req, res) => {
  try {
    const userId = req.query.id; // Ambil userId dari query parameter
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }
    const query = 'SELECT * FROM templates WHERE id = ?';
    const [result] = await db.execute(query, [userId]);

    if (result.length === 0) {
      return res.status(404).json({ message: 'No template found with this ID' });
    }
    return res.status(200).json(result[0]); // Mengembalikan template yang ditemukan
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching data' });
  }
});

// Endpoint untuk menambahkan template baru
router.post('/template', async (req, res) => {
  try {
    const { name, style = null, jsx = null, json = null, html = null } = req.body;

    // Validasi untuk memastikan field `name` ada
    if (!name) {
      return res.status(400).json({ message: 'Field "name" is required' });
    }

    // Membuat ID acak untuk template
    const id = Math.random().toString(36).substring(2, 10);

    // Query untuk menyimpan data template ke dalam database
    const query =
      'INSERT INTO templates (id, name, style, jsx, json, html) VALUES (?, ?, ?, ?, ?, ?)';

    // Nilai-nilai yang akan dimasukkan ke dalam query
    const values = [id, name, style, jsx, json ? JSON.stringify(json) : null, html];

    // Menggunakan Promise untuk query
    const [result] = await db.execute(query, values);

    // Mengirimkan response jika template berhasil ditambahkan
    return res.status(201).json({ message: 'Template created successfully', id });
  } catch (error) {
    console.error(error); // Menampilkan error di console untuk debug
    return res.status(500).json({ message: 'Error adding template', error });
  }
});

// Endpoint untuk menghapus template berdasarkan ID
router.delete('/template', async (req, res) => {
  try {
    const userId = req.query.id; // Ambil userId dari query parameter
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const query = 'DELETE FROM templates WHERE id = ?';
    const [result] = await db.execute(query, [userId]);

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: 'Nothing to delete' });
    }
    return res.status(200).json({ message: 'Template deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting template' });
  }
});

// Endpoint untuk memperbarui template berdasarkan ID
router.patch('/template', async (req, res) => {
  try {
    const userId = req.query.id; // Ambil userId dari query parameter
    const { name, style, jsx, json, html } = req.body;

    // Validasi input
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    if (!jsx) {
      return res.status(400).json({ message: 'Field "JSX" is required' });
    }

    // Query untuk memperbarui template berdasarkan userId
    const query = 'UPDATE templates SET  style = ?, jsx = ?, json = ?, html = ? WHERE id = ?';

    // Nilai-nilai yang akan dimasukkan ke dalam query
    const values = [style, jsx, JSON.stringify(json), html, userId];

    // Menggunakan Promise untuk query
    const [result] = await db.execute(query, values);

    // Memeriksa apakah ada template yang terpengaruh (diperbarui)
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: 'Template not found' });
    }

    // Mengirimkan response jika template berhasil diperbarui
    return res.status(200).json({ message: 'Template updated successfully' });
  } catch (error) {
    console.error(error); // Menampilkan error di console untuk debugging
    return res.status(500).json({ message: 'Error updating template', error });
  }
});

router.get('/preview', async (req, res) => {
  const newData = req.body; // JSON baru dari request body

  try {
    const userId = req.query.id; // Ambil userId dari query parameter
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const query = 'SELECT * FROM templates WHERE id = ?';
    const [result] = await db.execute(query, [userId]);

    if (result.length === 0) {
      return res.status(200).json({ message: 'There is no template' });
    }

    let htmlContent = result[0].html; // Template HTML dari database
    const dataRegex = /const data = (.*?);/s;
    const match = htmlContent.match(dataRegex);
    if (!match) {
      return res.status(500).json({ message: 'Failed to find data in template' });
    }
    const currentData = JSON.parse(match[1]);
    const updatedData = { ...currentData, ...newData }; // Gabungkan data lama dengan data baru
    htmlContent = htmlContent.replace(dataRegex, `const data = ${JSON.stringify(updatedData)};`);
    const options = { format: 'A4' };
    const file = { content: htmlContent };

    // Konversi HTML ke PDF
    const pdfBuffer = await pdf.generatePdf(file, options);

    // Kirim PDF ke client
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=template.pdf'); // Untuk preview di browser
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching data or generating PDF' });
  }
});

router.post('/preview', async (req, res) => {
  const newData = req.body; // JSON baru dari request body

  try {
    const userId = req.query.id; // Ambil userId dari query parameter
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const query = 'SELECT * FROM templates WHERE id = ?';
    const [result] = await db.execute(query, [userId]);

    if (result.length === 0) {
      return res.status(200).json({ message: 'There is no template' });
    }

    let htmlContent = result[0].html; // Template HTML dari database
    const dataRegex = /const data = (.*?);/s;
    const match = htmlContent.match(dataRegex);
    if (!match) {
      return res.status(500).json({ message: 'Failed to find data in template' });
    }
    const currentData = JSON.parse(match[1]);
    const updatedData = { ...currentData, ...newData }; // Gabungkan data lama dengan data baru
    htmlContent = htmlContent.replace(dataRegex, `const data = ${JSON.stringify(updatedData)};`);
    const options = { format: 'A4' };
    const file = { content: htmlContent };

    // Konversi HTML ke PDF
    const pdfBuffer = await pdf.generatePdf(file, options);

    // Kirim PDF ke client
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=template.pdf'); // Untuk preview di browser
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error fetching data or generating PDF' });
  }
});

export default router;
