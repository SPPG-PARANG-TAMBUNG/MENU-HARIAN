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
    machineDate: "2026-09-17",
    date: "Kamis, 17 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Kecap" },
    { value: "Tahu Crispy" },
    { value: "Buncis Labu Siam Bumbu Kuning" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "562,01", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,80", unit: "g" },
          { label: "Karbohidrat", value: "67,57", unit: "g" },
          { label: "Lemak", value: "25,83", unit: "g" },
          { label: "Serat", value: "2,19", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "636,43", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,67", unit: "g" },
          { label: "Karbohidrat", value: "77,21", unit: "g" },
          { label: "Lemak", value: "28,55", unit: "g" },
          { label: "Serat", value: "2,22", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "517,38", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,75", unit: "g" },
          { label: "Karbohidrat", value: "57,93", unit: "g" },
          { label: "Lemak", value: "25,62", unit: "g" },
          { label: "Serat", value: "2,17", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "767,38", unit: "kkal", highlight: true },
          { label: "Protein", value: "27,00", unit: "g" },
          { label: "Karbohidrat", value: "97,41", unit: "g" },
          { label: "Lemak", value: "31,65", unit: "g" },
          { label: "Serat", value: "2,34", unit: "g" },
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
    lastUpdated: "17 September 2026, 06.40 WITA",
  },
};
