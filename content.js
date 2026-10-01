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
    machineDate: "2026-10-01",
    date: "Kamis, 1 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Chicken Katsu" },
    { value: "Tahu Goreng Gurih" },
    { value: "Vegetable Curry" },
    { value: "Buah Jeruk" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "568,48", unit: "kkal", highlight: true },
          { label: "Protein", value: "23,03", unit: "g" },
          { label: "Karbohidrat", value: "74,03", unit: "g" },
          { label: "Lemak", value: "21,28", unit: "g" },
          { label: "Serat", value: "1,69", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "641,60", unit: "kkal", highlight: true },
          { label: "Protein", value: "27,22", unit: "g" },
          { label: "Karbohidrat", value: "85,90", unit: "g" },
          { label: "Lemak", value: "22,30", unit: "g" },
          { label: "Serat", value: "2,00", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "523,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,98", unit: "g" },
          { label: "Karbohidrat", value: "64,39", unit: "g" },
          { label: "Lemak", value: "21,07", unit: "g" },
          { label: "Serat", value: "1,67", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "746,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,50", unit: "g" },
          { label: "Karbohidrat", value: "105,34", unit: "g" },
          { label: "Lemak", value: "23,67", unit: "g" },
          { label: "Serat", value: "2,06", unit: "g" },
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
