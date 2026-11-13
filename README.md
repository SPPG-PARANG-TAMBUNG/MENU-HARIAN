# Menu Harian — SPPG Parang Tambung Kota Makassar

Halaman informasi menu harian, kandungan gizi per kelompok porsi, dan panduan konsumsi aman **Program Makan Bergizi Gratis** — **SPPG Parang Tambung Kota Makassar**.

Dirancang **mobile-first** dan interaktif agar mudah diakses lewat scan QR oleh siswa, orang tua, maupun penerima manfaat.

## Fitur Utama

- **Ompreng SUS304 Interaktif** — Visualisasi 5 sekat (atau 4 sekat otomatis) dengan animasi *liquid wave*, *3D tilt* (sentuh, mouse, dan giroskop HP), efek uap generatif, serta *SVG motion graphic* per kategori gizi tanpa ikon makanan sehingga menu bebas diganti setiap hari.
- **Hitung Mundur Batas Aman 2 Jam** — Kronograf interaktif untuk menandai waktu makanan diterima (`localStorage`) lengkap dengan status warna otomatis.
- **Kandungan Gizi per Porsi** — Pemilih kelompok porsi (*Porsi Kecil*, *Porsi Besar*, *Porsi Balita*, *Porsi Bumil Busui*), odometer angka energi, diagram donat makronutrisi interaktif, dan perbandingan antar porsi.
- **Bagikan Info Menu** — Salin ringkasan menu & gizi atau bagikan langsung melalui *Web Share API* di ponsel.

## Cara Mengubah Menu Harian

Edit file [`content.js`](content.js) saja (tidak perlu mengubah HTML/CSS/JS atau mengganti kode QR):

- `serving.machineDate` & `serving.date` — Tanggal sajian.
- `menu` — Daftar isi ompreng (5 baris standar: Karbohidrat, Protein Hewani, Protein Nabati, Sayuran, Buah; atau 4 baris).
- `nutrition.groups` — Nilai energi dan zat gizi tiap kelompok porsi.
- `safety` & `sppg` — Pesan keamanan pangan dan identitas SPPG.

## Menjalankan Secara Lokal

```bash
npm install
npm start
```

Buka `http://localhost:3000` di browser.

> **Static Hosting / GitHub Pages:** Halaman ini juga dapat di-host langsung sebagai situs statis (GitHub Pages, Netlify, Vercel) karena seluruh data dan aset dimuat di sisi klien.
