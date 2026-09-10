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
    date: "Kamis, 10 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Saos Bolognese" },
    { value: "Tempe Mendoan" },
    { value: "Mix Vegetable" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "558,51 unit: "kkal", highlight: true },
          { label: "Protein", value: "19,84", unit: "g" },
          { label: "Karbohidrat", value: "76,27", unit: "g" },
          { label: "Lemak", value: "20,54", unit: "g" },
          { label: "Serat", value: "2,50", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "619,18", unit: "kkal", highlight: true },
          { label: "Protein", value: "22,06", unit: "g" },
          { label: "Karbohidrat", value: "88,10", unit: "g" },
          { label: "Lemak", value: "21,21", unit: "g" },
          { label: "Serat", value: "2,71", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "513,88", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,79", unit: "g" },
          { label: "Karbohidrat", value: "66,63", unit: "g" },
          { label: "Lemak", value: "20,33", unit: "g" },
          { label: "Serat", value: "2,48", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "793,78", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,91", unit: "g" },
          { label: "Karbohidrat", value: "109,88", unit: "g" },
          { label: "Lemak", value: "26,94", unit: "g" },
          { label: "Serat", value: "2,94", unit: "g" },
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
    lastUpdated: "10 September 2026, 05.00 WITA",
  },
};
