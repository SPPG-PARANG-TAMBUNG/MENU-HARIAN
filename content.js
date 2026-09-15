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
    machineDate: "2026-09-16",
    date: "Rabu, 16 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Bumbu Bali" },
    { value: "Tempe Goreng Ketumbar" },
    { value: "Tumis Wortel + Kacang Panjang" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "499,11", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,60", unit: "g" },
          { label: "Karbohidrat", value: "62,24", unit: "g" },
          { label: "Lemak", value: "20,40", unit: "g" },
          { label: "Serat", value: "1,78", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "549,74", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,78", unit: "g" },
          { label: "Karbohidrat", value: "73,39", unit: "g" },
          { label: "Lemak", value: "20,62", unit: "g" },
          { label: "Serat", value: "1,92", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "454,49", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,55", unit: "g" },
          { label: "Karbohidrat", value: "52,60", unit: "g" },
          { label: "Lemak", value: "20,18", unit: "g" },
          { label: "Serat", value: "1,76", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "734,39", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,67", unit: "g" },
          { label: "Karbohidrat", value: "95,84", unit: "g" },
          { label: "Lemak", value: "26,79", unit: "g" },
          { label: "Serat", value: "2,22", unit: "g" },
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
    lastUpdated: "16 September 2026, 01.27 WITA",
  },
};
