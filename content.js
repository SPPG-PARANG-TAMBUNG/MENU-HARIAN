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
    machineDate: "2026-10-14",
    date: "Rabu, 14 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Daun Jeruk" },
    { value: "Tahu Sambal Tomat" },
    { value: "Sayur Bening Labu Siam + Labu Kuning + Jagung" },
    { value: "Buah Jeruk Siam Madu" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "526,58", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,43", unit: "g" },
          { label: "Karbohidrat", value: "63,97", unit: "g" },
          { label: "Lemak", value: "22,81", unit: "g" },
          { label: "Serat", value: "2,80", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "605,01", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,48", unit: "g" },
          { label: "Karbohidrat", value: "78,85", unit: "g" },
          { label: "Lemak", value: "25,56", unit: "g" },
          { label: "Serat", value: "3,10", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "476,96", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,38", unit: "g" },
          { label: "Karbohidrat", value: "54,34", unit: "g" },
          { label: "Lemak", value: "22,60", unit: "g" },
          { label: "Serat", value: "2,77", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "748,06", unit: "kkal", highlight: true },
          { label: "Protein", value: "27,67", unit: "g" },
          { label: "Karbohidrat", value: "95,37", unit: "g" },
          { label: "Lemak", value: "29,90", unit: "g" },
          { label: "Serat", value: "3,19", unit: "g" },
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
    lastUpdated: "14 Oktober 2026",
  },
};
