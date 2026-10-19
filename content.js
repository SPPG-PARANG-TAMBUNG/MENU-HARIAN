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
    machineDate: "2026-10-19",
    date: "Senin, 19 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Goreng Madu Wijen" },
    { value: "Tahu Bumbu Kuning" },
    { value: "Tumis Wortel Sawi Putih" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "528,82", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,66", unit: "g" },
          { label: "Karbohidrat", value: "60,39", unit: "g" },
          { label: "Lemak", value: "25,78", unit: "g" },
          { label: "Serat", value: "0,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "608,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,63", unit: "g" },
          { label: "Karbohidrat", value: "71,40", unit: "g" },
          { label: "Lemak", value: "28,53", unit: "g" },
          { label: "Serat", value: "0,97", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "484,20", unit: "kkal", highlight: true },
          { label: "Protein", value: "15,61", unit: "g" },
          { label: "Karbohidrat", value: "50,75", unit: "g" },
          { label: "Lemak", value: "25,57", unit: "g" },
          { label: "Serat", value: "0,84", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "731,80", unit: "kkal", highlight: true },
          { label: "Protein", value: "24,87", unit: "g" },
          { label: "Karbohidrat", value: "91,53", unit: "g" },
          { label: "Lemak", value: "31,17", unit: "g" },
          { label: "Serat", value: "1,08", unit: "g" },
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
    lastUpdated: "19 Oktober 2026",
  },
};
