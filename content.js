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
    machineDate: "2026-10-08",
    date: "Kamis, 8 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Lapis Daging Sapi" },
    { value: "Perkedel Tahu" },
    { value: "Tumis Sawi Putih Jagung Kembang Kol" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "542,13", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,84", unit: "g" },
          { label: "Karbohidrat", value: "76,90", unit: "g" },
          { label: "Lemak", value: "12,44", unit: "g" },
          { label: "Serat", value: "1,18", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "626,75", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,78", unit: "g" },
          { label: "Karbohidrat", value: "89,89", unit: "g" },
          { label: "Lemak", value: "13,09", unit: "g" },
          { label: "Serat", value: "1,34", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "497,50", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,79", unit: "g" },
          { label: "Karbohidrat", value: "67,26", unit: "g" },
          { label: "Lemak", value: "12,23", unit: "g" },
          { label: "Serat", value: "1,15", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "767,30", unit: "kkal", highlight: true },
          { label: "Protein", value: "27,90", unit: "g" },
          { label: "Karbohidrat", value: "109,41", unit: "g" },
          { label: "Lemak", value: "15,35", unit: "g" },
          { label: "Serat", value: "1,42", unit: "g" },
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
    lastUpdated: "8 Oktober 2026, 06.13 WITA",
  },
};
