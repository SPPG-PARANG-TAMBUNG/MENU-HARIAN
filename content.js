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
    machineDate: "2026-10-02",
    date: "Jumat, 2 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Lengkuas" },
    { value: "Tahu Sambal Tomat" },
    { value: "Sayur Bening Jagung + Wortel + Labu Siam" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "546,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,37", unit: "g" },
          { label: "Karbohidrat", value: "71,40", unit: "g" },
          { label: "Lemak", value: "22,79", unit: "g" },
          { label: "Serat", value: "2,18", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "634,07", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,38", unit: "g" },
          { label: "Karbohidrat", value: "84,40", unit: "g" },
          { label: "Lemak", value: "25,52", unit: "g" },
          { label: "Serat", value: "2,34", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "502,32", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,32", unit: "g" },
          { label: "Karbohidrat", value: "61,77", unit: "g" },
          { label: "Lemak", value: "22,58", unit: "g" },
          { label: "Serat", value: "2,16", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "762,22", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,66", unit: "g" },
          { label: "Karbohidrat", value: "103,92", unit: "g" },
          { label: "Lemak", value: "28,61", unit: "g" },
          { label: "Serat", value: "2,42", unit: "g" },
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
    lastUpdated: "29 September 2026, 09.47 WITA",
  },
};
