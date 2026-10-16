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
    machineDate: "2026-10-16",
    date: "Jumat, 16 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Kecap" },
    { value: "Tempe Garlic" },
    { value: "Sayur Steam Bumbu Pecel" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "511,90", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,95", unit: "g" },
          { label: "Karbohidrat", value: "66,27", unit: "g" },
          { label: "Lemak", value: "19,62", unit: "g" },
          { label: "Serat", value: "1,95", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "562,53", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,13", unit: "g" },
          { label: "Karbohidrat", value: "77,42", unit: "g" },
          { label: "Lemak", value: "19,84", unit: "g" },
          { label: "Serat", value: "2,08", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "467,28", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,90", unit: "g" },
          { label: "Karbohidrat", value: "56,63", unit: "g" },
          { label: "Lemak", value: "19,40", unit: "g" },
          { label: "Serat", value: "1,92", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "747,18", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,02", unit: "g" },
          { label: "Karbohidrat", value: "99,88", unit: "g" },
          { label: "Lemak", value: "26,01", unit: "g" },
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
    lastUpdated: "16 Oktober 2026",
  },
};
