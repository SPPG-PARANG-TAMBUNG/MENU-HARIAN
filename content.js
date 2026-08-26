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
    machineDate: "2026-08-27",
    date: "Kamis, 27 Agustus 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Chicken Katsu" },
    { value: "Tahu Goreng Ketumbar" },
    { value: "Vegetable Curry" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "588,65", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,00", unit: "g" },
          { label: "Karbohidrat", value: "74,22", unit: "g" },
          { label: "Lemak", value: "21,99", unit: "g" },
          { label: "Serat", value: "0,97", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "643,02", unit: "kkal", highlight: true },
          { label: "Protein", value: "28,53", unit: "g" },
          { label: "Karbohidrat", value: "83,85", unit: "g" },
          { label: "Lemak", value: "22,59", unit: "g" },
          { label: "Serat", value: "1,00", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "544,02", unit: "kkal", highlight: true },
          { label: "Protein", value: "24,95", unit: "g" },
          { label: "Karbohidrat", value: "64,58", unit: "g" },
          { label: "Lemak", value: "21,78", unit: "g" },
          { label: "Serat", value: "0,95", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "751,07", unit: "kkal", highlight: true },
          { label: "Protein", value: "32,86", unit: "g" },
          { label: "Karbohidrat", value: "103,98", unit: "g" },
          { label: "Lemak", value: "23,98", unit: "g" },
          { label: "Serat", value: "1,10", unit: "g" },
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
    lastUpdated: "27 Agustus 2026, 03.00 WITA",
  },
};
