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
    machineDate: "2026-09-07",
    date: "Senin, 07 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Rambutan" },
    { value: "Tahu Saos Bangkok " },
    { value: "Tumis Wortel Buncis" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "573,31", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,95", unit: "g" },
          { label: "Karbohidrat", value: "69,51", unit: "g" },
          { label: "Lemak", value: "24,04", unit: "g" },
          { label: "Serat", value: "1,29", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "637,43", unit: "kkal", highlight: true },
          { label: "Protein", value: "25,95", unit: "g" },
          { label: "Karbohidrat", value: "79,15", unit: "g" },
          { label: "Lemak", value: "25,02", unit: "g" },
          { label: "Serat", value: "1,32", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "528,68", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,90", unit: "g" },
          { label: "Karbohidrat", value: "59,88", unit: "g" },
          { label: "Lemak", value: "23,83", unit: "g" },
          { label: "Serat", value: "1,27", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "763,23", unit: "kkal", highlight: true },
          { label: "Protein", value: "32,85", unit: "g" },
          { label: "Karbohidrat", value: "99,36", unit: "g" },
          { label: "Lemak", value: "27,27", unit: "g" },
          { label: "Serat", value: "1,44", unit: "g" },
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
    lastUpdated: "07 September 2026, 05.00 WITA",
  },
};
