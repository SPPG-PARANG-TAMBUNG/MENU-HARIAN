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
    machineDate: "2026-09-22",
    date: "Selasa, 22 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Saos Kacang" },
    { value: "Tahu Garlic" },
    { value: "Tumis Kol Wortel" },
    { value: "Buah Pisang Susu" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "568,60", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,08", unit: "g" },
          { label: "Karbohidrat", value: "68,10", unit: "g" },
          { label: "Lemak", value: "26,54", unit: "g" },
          { label: "Serat", value: "1,34", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "653,82", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,08", unit: "g" },
          { label: "Karbohidrat", value: "80,55", unit: "g" },
          { label: "Lemak", value: "29,28", unit: "g" },
          { label: "Serat", value: "1,44", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "523,97", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,03", unit: "g" },
          { label: "Karbohidrat", value: "58,46", unit: "g" },
          { label: "Lemak", value: "26,33", unit: "g" },
          { label: "Serat", value: "1,32", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "795,57", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,53", unit: "g" },
          { label: "Karbohidrat", value: "105,63", unit: "g" },
          { label: "Lemak", value: "31,96", unit: "g" },
          { label: "Serat", value: "1,65", unit: "g" },
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
    lastUpdated: "22 September 2026, 07.31 WITA",
  },
};
