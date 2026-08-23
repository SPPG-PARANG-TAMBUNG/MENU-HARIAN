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
    machineDate: "2026-08-24",
    date: "Senin, 24 Agustus 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  menu: [
    { value: "Diwan" },
    { value: "Dede" },
    { value: "Kevin" },
    { value: "Challi" },
    { value: "Heri" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "450", unit: "kkal", highlight: true },
          { label: "Protein", value: "18", unit: "g" },
          { label: "Karbohidrat", value: "60", unit: "g" },
          { label: "Lemak", value: "14", unit: "g" },
          { label: "Serat", value: "6", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "610", unit: "kkal", highlight: true },
          { label: "Protein", value: "26", unit: "g" },
          { label: "Karbohidrat", value: "82", unit: "g" },
          { label: "Lemak", value: "19", unit: "g" },
          { label: "Serat", value: "8", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "350", unit: "kkal", highlight: true },
          { label: "Protein", value: "15", unit: "g" },
          { label: "Karbohidrat", value: "48", unit: "g" },
          { label: "Lemak", value: "10", unit: "g" },
          { label: "Serat", value: "5", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "680", unit: "kkal", highlight: true },
          { label: "Protein", value: "30", unit: "g" },
          { label: "Karbohidrat", value: "88", unit: "g" },
          { label: "Lemak", value: "22", unit: "g" },
          { label: "Serat", value: "9", unit: "g" },
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
    contact: "08xx-xxxx-xxxx",
    lastUpdated: "23 Agustus 2026, 23.00 WITA",
  },
};
