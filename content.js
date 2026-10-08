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
    machineDate: "2026-10-08",
    date: "Kamis, 8 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Bumbu Kuning" },
    { value: "Tempe Bacem" },
    { value: "Mix Vegetable" },
    { value: "Buah Naga" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "528,46", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,40", unit: "g" },
          { label: "Karbohidrat", value: "64,15", unit: "g" },
          { label: "Lemak", value: "22,29", unit: "g" },
          { label: "Serat", value: "2,96", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "587,29", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,79", unit: "g" },
          { label: "Karbohidrat", value: "75,61", unit: "g" },
          { label: "Lemak", value: "23,12", unit: "g" },
          { label: "Serat", value: "3,63", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "483,84", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,35", unit: "g" },
          { label: "Karbohidrat", value: "54,52", unit: "g" },
          { label: "Lemak", value: "22,08", unit: "g" },
          { label: "Serat", value: "2,93", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "765,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,55", unit: "g" },
          { label: "Karbohidrat", value: "96,55", unit: "g" },
          { label: "Lemak", value: "29,29", unit: "g" },
          { label: "Serat", value: "3,82", unit: "g" },
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
    lastUpdated: "8 Oktober 2026, 09.13 WITA",
  },
};
