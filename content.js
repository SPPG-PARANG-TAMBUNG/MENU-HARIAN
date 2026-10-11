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
    machineDate: "2026-10-12",
    date: "Senin, 12 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Bakso Ayam Saos Kacang" },
    { value: "Tahu Kecap" },
    { value: "Tumis Labu Siam + Jagung" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "537,64", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,98", unit: "g" },
          { label: "Karbohidrat", value: "78,85", unit: "g" },
          { label: "Lemak", value: "15,82", unit: "g" },
          { label: "Serat", value: "2,25", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "607,37", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,08", unit: "g" },
          { label: "Karbohidrat", value: "89,87", unit: "g" },
          { label: "Lemak", value: "16,85", unit: "g" },
          { label: "Serat", value: "2,36", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "493,02", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,93", unit: "g" },
          { label: "Karbohidrat", value: "69,22", unit: "g" },
          { label: "Lemak", value: "15,61", unit: "g" },
          { label: "Serat", value: "2,23", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "725,17", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,89", unit: "g" },
          { label: "Karbohidrat", value: "110,00", unit: "g" },
          { label: "Lemak", value: "18,62", unit: "g" },
          { label: "Serat", value: "2,47", unit: "g" },
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
    lastUpdated: "12 Oktober 2026",
  },
};
