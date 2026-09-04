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
    machineDate: "2026-09-04",
    date: "Jumat, 04 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Lontong" },
    { value: "Telur Bulat Kecap" },
    { value: "Tahu Garlic" },
    { value: "Sayur Steam Bumbu Pecel" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "588,30", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,76", unit: "g" },
          { label: "Karbohidrat", value: "71,66", unit: "g" },
          { label: "Lemak", value: "25,41", unit: "g" },
          { label: "Serat", value: "2,94", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "676,93", unit: "kkal", highlight: true },
          { label: "Protein", value: "23,97", unit: "g" },
          { label: "Karbohidrat", value: "83,11", unit: "g" },
          { label: "Lemak", value: "28,75", unit: "g" },
          { label: "Serat", value: "3,61", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "533,63", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,67", unit: "g" },
          { label: "Karbohidrat", value: "61,35", unit: "g" },
          { label: "Lemak", value: "24,76", unit: "g" },
          { label: "Serat", value: "2,85", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "791,13", unit: "kkal", highlight: true },
          { label: "Protein", value: "28,02", unit: "g" },
          { label: "Karbohidrat", value: "103,06", unit: "g" },
          { label: "Lemak", value: "30,86", unit: "g" },
          { label: "Serat", value: "3,73", unit: "g" },
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
    lastUpdated: "04 September 2026, 05.00 WITA",
  },
};
