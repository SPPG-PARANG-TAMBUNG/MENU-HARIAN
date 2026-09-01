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
    machineDate: "2026-09-02",
    date: "Senin, 02 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Kentucky" },
    { value: "Tahu Sambal Tomat" },
    { value: "Tumis Wortel + Sawi Hijau" },
    { value: "Buah Jeruk Siam Madu" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "604,36", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,47", unit: "g" },
          { label: "Karbohidrat", value: "73,56", unit: "g" },
          { label: "Lemak", value: "27,96", unit: "g" },
          { label: "Serat", value: "4,01", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "691,38", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,60", unit: "g" },
          { label: "Karbohidrat", value: "86,29", unit: "g" },
          { label: "Lemak", value: "30,73", unit: "g" },
          { label: "Serat", value: "4,93", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "559,73", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,42", unit: "g" },
          { label: "Karbohidrat", value: "63,92", unit: "g" },
          { label: "Lemak", value: "27,75", unit: "g" },
          { label: "Serat", value: "3,98", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "819,53", unit: "kkal", highlight: true },
          { label: "Protein", value: "27,88", unit: "g" },
          { label: "Karbohidrat", value: "105,81", unit: "g" },
          { label: "Lemak", value: "33,82", unit: "g" },
          { label: "Serat", value: "5,01", unit: "g" },
        ],
      },
    ],
  },

  safety: {
    consumption: "BATAS AMAN KONSUMSI 2 JAM SETELAH MAKANAN DITERIMA",
    allergy:
      "JIKA ADA PENERIMA MANFAAT YANG MEMILIKI RIWAYAT ALERGI TERTENTU SILAKAN DISAMPAIKAN SEGERA",
  },

  sppg: {
    name: "SPPG Parang Tambung Kota Makassar",
    unit: "Satuan Pelayanan Pemenuhan Gizi",
    address: "Parang Tambung, Kota Makassar, Sulawesi Selatan",
    instagramLabel: "@sppg.parangtambung",
    instagramUrl: "https://www.instagram.com/sppgparangtambung",
    lastUpdated: "02 September 2026, 03.00 WITA",
  },
};
