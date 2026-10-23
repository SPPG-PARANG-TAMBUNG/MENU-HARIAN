/*
  ================================================================
  FILE YANG DIEDIT SETIAP KALI MENU ATAU DATA GIZI BERUBAH
  ================================================================

  Ganti teks atau angka yang berada di antara tanda kutip.
  Pertahankan tanda kutip, koma, kurung, dan nama bagian agar halaman tetap bekerja.
*/

window.LABEL_DATA = {
  page: {
    title: "Menu Hari Ini | SPPG Parang Tambung Kota Makassar",
    description: "Informasi menu dan kandungan gizi SPPG Parang Tambung Kota Makassar.",
    programName: "Program Makan Bergizi Gratis",
    eyebrow: "Informasi sajian",
    heading: "Menu Bergizi Hari Ini",
    intro:
      "Lihat menu, kandungan gizi tiap kelompok porsi, dan informasi konsumsi dalam satu halaman.",
  },

  serving: {
    // Format machineDate harus TAHUN-BULAN-TANGGAL.
    machineDate: "2026-10-23",
    date: "Jumat, 23 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Padang + Sambal Ijo" },
    { value: "Perkedel Tahu" },
    { value: "Gulai Nangka Muda + Kacang Panjang (Tanpa Santan)" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "543,53", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,62", unit: "g" },
          { label: "Karbohidrat", value: "62,36", unit: "g" },
          { label: "Lemak", value: "25,81", unit: "g" },
          { label: "Serat", value: "2,76", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "623,56", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,59", unit: "g" },
          { label: "Karbohidrat", value: "73,37", unit: "g" },
          { label: "Lemak", value: "28,56", unit: "g" },
          { label: "Serat", value: "2,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "498,91", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,57", unit: "g" },
          { label: "Karbohidrat", value: "52,72", unit: "g" },
          { label: "Lemak", value: "25,60", unit: "g" },
          { label: "Serat", value: "2,73", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "746,51", unit: "kkal", highlight: true },
          { label: "Protein", value: "25,83", unit: "g" },
          { label: "Karbohidrat", value: "93,50", unit: "g" },
          { label: "Lemak", value: "31,20", unit: "g" },
          { label: "Serat", value: "2,97", unit: "g" },
        ],
      },
    ],
  },

  safety: {
    consumption: "Batas aman konsumsi 2 jam setelah makanan diterima.",
    allergy:
      "Jika ada penerima manfaat yang memiliki riwayat alergi tertentu, silakan sampaikan segera.",
  },

  sppg: {
    name: "SPPG Parang Tambung Kota Makassar",
    unit: "Satuan Pelayanan Pemenuhan Gizi",
    address: "Parang Tambung, Kota Makassar, Sulawesi Selatan",
    instagramLabel: "@sppg.parangtambung",
    instagramUrl: "https://www.instagram.com/sppgparangtambung",
    lastUpdated: "23 Oktober 2026",
  },
};
