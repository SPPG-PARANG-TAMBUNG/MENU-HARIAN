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
    machineDate: "2026-09-18",
    date: "Jumat, 18 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Udang Saos Padang" },
    { value: "Tempe Mendoan" },
    { value: "Tumis Wortel + Sawi Putih + Jagung" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "509,82", unit: "kkal", highlight: true },
          { label: "Protein", value: "23,30", unit: "g" },
          { label: "Karbohidrat", value: "81,37", unit: "g" },
          { label: "Lemak", value: "11,71", unit: "g" },
          { label: "Serat", value: "1,62", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "576,24", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,59", unit: "g" },
          { label: "Karbohidrat", value: "94,38", unit: "g" },
          { label: "Lemak", value: "11,96", unit: "g" },
          { label: "Serat", value: "1,78", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "465,19", unit: "kkal", highlight: true },
          { label: "Protein", value: "22,25", unit: "g" },
          { label: "Karbohidrat", value: "71,73", unit: "g" },
          { label: "Lemak", value: "11,49", unit: "g" },
          { label: "Serat", value: "1,59", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "690,14", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,82", unit: "g" },
          { label: "Karbohidrat", value: "115,01", unit: "g" },
          { label: "Lemak", value: "13,27", unit: "g" },
          { label: "Serat", value: "1,97", unit: "g" },
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
    lastUpdated: "18 September 2026, 07.56 WITA",
  },
};
