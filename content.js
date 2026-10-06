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
    machineDate: "2026-10-06",
    date: "Selasa, 6 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Bawang Putih" },
    { value: "Tahu Balado" },
    { value: "Tumis Wortel Sawi Hijau" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "517,13", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,73", unit: "g" },
          { label: "Karbohidrat", value: "56,98", unit: "g" },
          { label: "Lemak", value: "25,80", unit: "g" },
          { label: "Serat", value: "0,70", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "597,16", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,70", unit: "g" },
          { label: "Karbohidrat", value: "68,00", unit: "g" },
          { label: "Lemak", value: "28,55", unit: "g" },
          { label: "Serat", value: "0,80", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "472,51", unit: "kkal", highlight: true },
          { label: "Protein", value: "15,68", unit: "g" },
          { label: "Karbohidrat", value: "47,34", unit: "g" },
          { label: "Lemak", value: "25,59", unit: "g" },
          { label: "Serat", value: "0,67", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "728,11", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,03", unit: "g" },
          { label: "Karbohidrat", value: "88,20", unit: "g" },
          { label: "Lemak", value: "31,66", unit: "g" },
          { label: "Serat", value: "0,92", unit: "g" },
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
    lastUpdated: "6 Oktober 2026, 10.47 WITA",
  },
};
