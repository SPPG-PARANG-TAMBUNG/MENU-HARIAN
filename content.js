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
    machineDate: "2026-08-28",
    date: "Jumat, 28 Agustus 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Bulat Saos Tiram" },
    { value: "Perkedel Tahu" },
    { value: "Tumis Buncis + Sawi Putih" },
    { value: "Buah Apel" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "515,56", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,84", unit: "g" },
          { label: "Karbohidrat", value: "70,43", unit: "g" },
          { label: "Lemak", value: "19,95", unit: "g" },
          { label: "Serat", value: "3,37", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "565,99", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,92", unit: "g" },
          { label: "Karbohidrat", value: "81,55", unit: "g" },
          { label: "Lemak", value: "20,21", unit: "g" },
          { label: "Serat", value: "3,65", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "470,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "15,79", unit: "g" },
          { label: "Karbohidrat", value: "60,79", unit: "g" },
          { label: "Lemak", value: "19,74", unit: "g" },
          { label: "Serat", value: "3,34", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "690,84", unit: "kkal", highlight: true },
          { label: "Protein", value: "23,35", unit: "g" },
          { label: "Karbohidrat", value: "104,05", unit: "g" },
          { label: "Lemak", value: "22,12", unit: "g" },
          { label: "Serat", value: "4,25", unit: "g" },
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
    lastUpdated: "28 Agustus 2026, 07.00 WITA",
  },
};
