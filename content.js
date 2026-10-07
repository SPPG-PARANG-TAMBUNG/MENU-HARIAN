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
    machineDate: "2026-10-07",
    date: "Rabu, 7 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Bakar Taliwang" },
    { value: "Tempe Mendoan" },
    { value: "Tumis Labu Siam + Kacang Panjang" },
    { value: "Buah Jeruk" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "548,07", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,88", unit: "g" },
          { label: "Karbohidrat", value: "71,11", unit: "g" },
          { label: "Lemak", value: "21,70", unit: "g" },
          { label: "Serat", value: "3,41", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "631,50", unit: "kkal", highlight: true },
          { label: "Protein", value: "22,93", unit: "g" },
          { label: "Karbohidrat", value: "82,99", unit: "g" },
          { label: "Lemak", value: "24,45", unit: "g" },
          { label: "Serat", value: "3,71", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "503,45", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,83", unit: "g" },
          { label: "Karbohidrat", value: "61,48", unit: "g" },
          { label: "Lemak", value: "21,48", unit: "g" },
          { label: "Serat", value: "3,38", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "755,75", unit: "kkal", highlight: true },
          { label: "Protein", value: "28,02", unit: "g" },
          { label: "Karbohidrat", value: "103,62", unit: "g" },
          { label: "Lemak", value: "27,00", unit: "g" },
          { label: "Serat", value: "3,90", unit: "g" },
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
    lastUpdated: "7 Oktober 2026, 05.32 WITA",
  },
};
