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
    machineDate: "2026-09-09",
    date: "Rabu, 09 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Lengkuas" },
    { value: "Tahu Saos BBQ" },
    { value: "Sayur Sop" },
    { value: "Buah Jeruk Siam Madu" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "523,44", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,10", unit: "g" },
          { label: "Karbohidrat", value: "58,67", unit: "g" },
          { label: "Lemak", value: "25,68", unit: "g" },
          { label: "Serat", value: "1,90", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "600,12", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,02", unit: "g" },
          { label: "Karbohidrat", value: "68,87", unit: "g" },
          { label: "Lemak", value: "28,40", unit: "g" },
          { label: "Serat", value: "1,99", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "478,82", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,05", unit: "g" },
          { label: "Karbohidrat", value: "49,04", unit: "g" },
          { label: "Lemak", value: "25,47", unit: "g" },
          { label: "Serat", value: "1,87", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "735,02", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,43", unit: "g" },
          { label: "Karbohidrat", value: "90,07", unit: "g" },
          { label: "Lemak", value: "31,52", unit: "g" },
          { label: "Serat", value: "2,28", unit: "g" },
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
    lastUpdated: "09 September 2026, 05.00 WITA",
  },
};
