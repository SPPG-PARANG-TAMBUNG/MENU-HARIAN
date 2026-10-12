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
    machineDate: "2026-10-13",
    date: "Selasa, 13 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Gulai Telur Bulat (Tanpa Santan)" },
    { value: "Tumis Tempe Kacang Panjang" },
    { value: "Tumis Wortel + Pakcoy" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "500,79", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,27", unit: "g" },
          { label: "Karbohidrat", value: "64,48", unit: "g" },
          { label: "Lemak", value: "20,46", unit: "g" },
          { label: "Serat", value: "0,97", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "554,41", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,47", unit: "g" },
          { label: "Karbohidrat", value: "76,81", unit: "g" },
          { label: "Lemak", value: "20,70", unit: "g" },
          { label: "Serat", value: "0,99", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "456,16", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,22", unit: "g" },
          { label: "Karbohidrat", value: "54,84", unit: "g" },
          { label: "Lemak", value: "20,24", unit: "g" },
          { label: "Serat", value: "0,94", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "739,06", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,33", unit: "g" },
          { label: "Karbohidrat", value: "99,55", unit: "g" },
          { label: "Lemak", value: "26,88", unit: "g" },
          { label: "Serat", value: "1,19", unit: "g" },
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
    lastUpdated: "13 Oktober 2026",
  },
};
