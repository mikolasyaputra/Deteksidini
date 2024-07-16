const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk menguraikan body dari request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware untuk menyajikan file statis (CSS, gambar, dll.)
app.use(express.static(path.join(__dirname)));

// Route untuk menyajikan file formlogin.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'formlogin.html'));
});

// Endpoint untuk menerima data dari form
app.post('/submit-form', (req, res) => {
    const { name, gender, age } = req.body;
    console.log(`Nama: ${name}, Jenis Kelamin: ${gender}, Umur: ${age}`);
    // Simpan data ke database atau lakukan tindakan lainnya di sini
    res.send('Data berhasil disimpan');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
