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
    machineDate: "2026-09-11",
    date: "Jumat, 11 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Madu Wijen" },
    { value: "Tahu Goreng Marinasi" },
    { value: "Tumis Nangka Muda + Kacang Panjang" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "576,90", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,38", unit: "g" },
          { label: "Karbohidrat", value: "70,16", unit: "g" },
          { label: "Lemak", value: "26,68", unit: "g" },
          { label: "Serat", value: "3,07", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "664,02", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,39", unit: "g" },
          { label: "Karbohidrat", value: "83,16", unit: "g" },
          { label: "Lemak", value: "29,41", unit: "g" },
          { label: "Serat", value: "3,23", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "532,27", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,33", unit: "g" },
          { label: "Karbohidrat", value: "60,52", unit: "g" },
          { label: "Lemak", value: "26,46", unit: "g" },
          { label: "Serat", value: "3,04", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "792,17", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,67", unit: "g" },
          { label: "Karbohidrat", value: "102,67", unit: "g" },
          { label: "Lemak", value: "32,49", unit: "g" },
          { label: "Serat", value: "3,31", unit: "g" },
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
    lastUpdated: "11 September 2026, 05.00 WITA",
  },
};
