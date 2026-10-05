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
    machineDate: "2026-10-05",
    date: "Senin, 5 Oktober 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Steam Saos Asam Manis" },
    { value: "Tempe Orek" },
    { value: "Tumis Kol Wortel" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "484,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,48", unit: "g" },
          { label: "Karbohidrat", value: "67,39", unit: "g" },
          { label: "Lemak", value: "17,49", unit: "g" },
          { label: "Serat", value: "1,14", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "535,48", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,63", unit: "g" },
          { label: "Karbohidrat", value: "78,83", unit: "g" },
          { label: "Lemak", value: "17,73", unit: "g" },
          { label: "Serat", value: "1,17", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "440,23", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,43", unit: "g" },
          { label: "Karbohidrat", value: "57,75", unit: "g" },
          { label: "Lemak", value: "17,28", unit: "g" },
          { label: "Serat", value: "1,12", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "720,13", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,49", unit: "g" },
          { label: "Karbohidrat", value: "101,57", unit: "g" },
          { label: "Lemak", value: "23,91", unit: "g" },
          { label: "Serat", value: "1,36", unit: "g" },
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
    lastUpdated: "29 September 2026, 06.47 WITA",
  },
};
