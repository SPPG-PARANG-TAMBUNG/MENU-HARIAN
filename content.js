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
    machineDate: "2026-09-24",
    date: "Kamis, 24 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Bumbu Woku" },
    { value: "Tempe Bacem" },
    { value: "Cah Wortel + Kembang Kol" },
    { value: "Buah Apel" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "531,82", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,23", unit: "g" },
          { label: "Karbohidrat", value: "70,03", unit: "g" },
          { label: "Lemak", value: "21,21", unit: "g" },
          { label: "Serat", value: "3,35", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "576,45", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,28", unit: "g" },
          { label: "Karbohidrat", value: "79,67", unit: "g" },
          { label: "Lemak", value: "21,42", unit: "g" },
          { label: "Serat", value: "3,37", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "487,20", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,18", unit: "g" },
          { label: "Karbohidrat", value: "60,39", unit: "g" },
          { label: "Lemak", value: "20,99", unit: "g" },
          { label: "Serat", value: "3,32", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "750,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "28,03", unit: "g" },
          { label: "Karbohidrat", value: "101,42", unit: "g" },
          { label: "Lemak", value: "27,18", unit: "g" },
          { label: "Serat", value: "3,75", unit: "g" },
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
    lastUpdated: "24 September 2026, 09.09 WITA",
  },
};
