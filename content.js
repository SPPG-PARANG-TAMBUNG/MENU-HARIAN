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
    machineDate: "2026-09-03",
    date: "Senin, 03 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Lontong" },
    { value: "Telur Bulat Kecap" },
    { value: "Tahu Garlic" },
    { value: "Sayur Steam Bumbu Pecel" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "517,93", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,52", unit: "g" },
          { label: "Karbohidrat", value: "65,43", unit: "g" },
          { label: "Lemak", value: "21,05", unit: "g" },
          { label: "Serat", value: "1,95", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "574,56", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,83", unit: "g" },
          { label: "Karbohidrat", value: "78,09", unit: "g" },
          { label: "Lemak", value: "21,28", unit: "g" },
          { label: "Serat", value: "2,19", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "473,31", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,47", unit: "g" },
          { label: "Karbohidrat", value: "55,79", unit: "g" },
          { label: "Lemak", value: "20,83", unit: "g" },
          { label: "Serat", value: "1,92", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "778,51", unit: "kkal", highlight: true },
          { label: "Protein", value: "33,15", unit: "g" },
          { label: "Karbohidrat", value: "29,06", unit: "g" },
          { label: "Lemak", value: "99,51", unit: "g" },
          { label: "Serat", value: "2,38", unit: "g" },
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
    lastUpdated: "03 September 2026, 05.00 WITA",
  },
};
