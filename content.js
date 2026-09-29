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
    machineDate: "2026-09-30",
    date: "Rabu, 30 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Bumbu Kecap" },
    { value: "Tempe Crispy" },
    { value: "Tumis Wortel + Kembang Kol" },
    { value: "Buah Apel" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "551,66", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,13", unit: "g" },
          { label: "Karbohidrat", value: "73,98", unit: "g" },
          { label: "Lemak", value: "20,76", unit: "g" },
          { label: "Serat", value: "1,34", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "596,28", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,18", unit: "g" },
          { label: "Karbohidrat", value: "83,62", unit: "g" },
          { label: "Lemak", value: "20,97", unit: "g" },
          { label: "Serat", value: "1,36", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "507,03", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,08", unit: "g" },
          { label: "Karbohidrat", value: "64,34", unit: "g" },
          { label: "Lemak", value: "20,54", unit: "g" },
          { label: "Serat", value: "1,31", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "774,93", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,94", unit: "g" },
          { label: "Karbohidrat", value: "104,56", unit: "g" },
          { label: "Lemak", value: "27,13", unit: "g" },
          { label: "Serat", value: "1,55", unit: "g" },
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
