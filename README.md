# Website Label SPPG / MBG — GitHub Pages

Paket ini adalah halaman informasi menu yang ringan, ramah ponsel, dan dapat dipasang gratis di GitHub Pages. Setelah terbit, alamat halamannya dapat dijadikan tujuan **kode QR permanen**. Menu dapat diperbarui tanpa mencetak ulang QR.

## Isi paket

- `index.html` — struktur halaman.
- `style.css` — tampilan dan tata letak responsif.
- `content.js` — **satu-satunya file yang perlu diedit untuk pembaruan rutin**.
- `app.js` — menampilkan isi `content.js` ke halaman.
- `BGN.png` — logo Badan Gizi Nasional pada bagian atas halaman.
- `.nojekyll` — memastikan GitHub Pages menyajikan file apa adanya.

Tidak ada aplikasi tambahan, database, atau biaya hosting yang diperlukan.
Halaman juga memuat `content.js` dengan penanda anti-cache, sehingga data terbaru diambil saat halaman dibuka ulang.

## 1. Lihat halaman sebelum diunggah

Ekstrak ZIP, buka foldernya, lalu klik dua kali `index.html`. Halaman dapat dilihat langsung di browser.

## 2. Unggah ke GitHub Pages

1. Masuk ke [GitHub](https://github.com/).
2. Klik **New repository**.
3. Isi nama repositori, misalnya `label-sppg`.
4. Pilih **Public**, lalu klik **Create repository**.
5. Di halaman repositori, pilih **Add file → Upload files**.
6. Unggah **isi folder ini**: `index.html`, `style.css`, `content.js`, `app.js`, `BGN.png`, dan `.nojekyll`.
7. Klik **Commit changes**.
8. Buka **Settings → Pages**.
9. Pada **Build and deployment**, pilih **Deploy from a branch**.
10. Pilih branch **main**, folder **/(root)**, lalu klik **Save**.

GitHub biasanya membutuhkan beberapa menit untuk menerbitkan halaman. Alamatnya akan berbentuk:

```text
https://USERNAME.github.io/label-sppg/
```

Ganti `USERNAME` dengan username GitHub Anda. Jika nama repositori berbeda, bagian `label-sppg` juga mengikuti nama repositori tersebut.

## 3. Jadikan URL sebagai QR permanen

Setelah halaman GitHub Pages dapat dibuka:

1. Salin URL lengkapnya.
2. Buat kode QR dari URL tersebut melalui pembuat QR pilihan Anda.
3. Uji QR dari ponsel lain.
4. Setelah teruji, cetak QR pada label.

**Penting:** jangan mengganti username GitHub, nama repositori, atau menghapus repositori setelah QR dicetak. Perubahan tersebut dapat mengubah atau memutus URL.

## 4. Cara mengganti menu setiap hari

Semua data rutin berada di `content.js`.

1. Di repositori GitHub, klik file `content.js`.
2. Klik ikon pensil **Edit this file**.
3. Ganti teks di antara tanda kutip, misalnya:

```js
{ value: "Ayam kecap" },
```

menjadi:

```js
{ value: "Telur pindang" },
```

4. Perbarui juga tanggal, kandungan gizi setiap kelompok porsi, dan waktu pembaruan.
5. Klik **Commit changes**.

Isi pada URL yang sama akan ikut diperbarui setelah GitHub Pages selesai memproses perubahan. Biasanya perlu beberapa menit.

## Bagian penting di `content.js`

- `serving` — tanggal penyajian.
- `menu` — daftar makanan.
- `nutrition.groups` — nilai gizi untuk Porsi Kecil, Porsi Besar, Porsi Balita, serta Porsi Bumil & Busui.
- `safety` — dua peringatan konsumsi dan alergi.
- `sppg` — nama, alamat, kontak, dan waktu pembaruan.

Untuk menambah menu, salin salah satu baris di dalam bagian `menu`. Untuk menghapus menu, hapus satu baris lengkap. Pertahankan tanda kutip, koma, dan kurung agar halaman tetap bekerja.

## Catatan sebelum dipakai resmi

- Ganti seluruh data contoh, khususnya menu, nilai gizi, alamat, dan kontak.
- Angka gizi dalam paket adalah contoh tata letak. Pastikan seluruh nilainya diperiksa oleh petugas atau ahli gizi yang berwenang sebelum dipublikasikan.
- Periksa halaman dan lakukan uji pindai setiap kali selesai memperbarui data.

## Jika perubahan belum terlihat

Tunggu beberapa menit, lalu muat ulang halaman. Di ponsel, tutup halaman lama dan pindai QR kembali. Jika halaman kosong setelah mengedit `content.js`, periksa apakah ada tanda kutip, koma, atau kurung yang tidak sengaja terhapus.
