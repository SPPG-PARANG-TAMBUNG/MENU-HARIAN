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
    machineDate: "2026-09-29",
    date: "Selasa, 29 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Crispy Saos Tomat" },
    { value: "Tahu Goreng Ketumbar" },
    { value: "Tumis Terong + Kacang Panjang" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "579,15", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,73", unit: "g" },
          { label: "Karbohidrat", value: "64,88", unit: "g" },
          { label: "Lemak", value: "28,77", unit: "g" },
          { label: "Serat", value: "1,52", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "659,17", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,70", unit: "g" },
          { label: "Karbohidrat", value: "75,90", unit: "g" },
          { label: "Lemak", value: "31,52", unit: "g" },
          { label: "Serat", value: "1,62", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "534,52", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,68", unit: "g" },
          { label: "Karbohidrat", value: "55,25", unit: "g" },
          { label: "Lemak", value: "28,56", unit: "g" },
          { label: "Serat", value: "1,49", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "767,22", unit: "kkal", highlight: true },
          { label: "Protein", value: "25,03", unit: "g" },
          { label: "Karbohidrat", value: "96,03", unit: "g" },
          { label: "Lemak", value: "32,91", unit: "g" },
          { label: "Serat", value: "1,73", unit: "g" },
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
    lastUpdated: "29 September 2026, 11.47 WITA",
  },
};
