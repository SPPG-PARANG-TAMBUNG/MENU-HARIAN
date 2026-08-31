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
    machineDate: "2026-09-01",
    date: "Senin, 01 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Balado Manis" },
    { value: "Kering Tempe Kacang" },
    { value: "Kacang Panjang + Labu Siam Bumbu Kuning" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "517,25", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,32", unit: "g" },
          { label: "Karbohidrat", value: "57,56", unit: "g" },
          { label: "Lemak", value: "19,48", unit: "g" },
          { label: "Serat", value: "2,40", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "583,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,44", unit: "g" },
          { label: "Karbohidrat", value: "67,90", unit: "g" },
          { label: "Lemak", value: "20,14", unit: "g" },
          { label: "Serat", value: "2,50", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "472,63", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,27", unit: "g" },
          { label: "Karbohidrat", value: "47,92", unit: "g" },
          { label: "Lemak", value: "19,27", unit: "g" },
          { label: "Serat", value: "2,38", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "775,95", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,42", unit: "g" },
          { label: "Karbohidrat", value: "88,25", unit: "g" },
          { label: "Lemak", value: "26,94", unit: "g" },
          { label: "Serat", value: "2,62", unit: "g" },
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
    lastUpdated: "01 September 2026, 03.00 WITA",
  },
};
