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
    machineDate: "2026-09-21",
    date: "Senin, 21 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Saos Asam Manis" },
    { value: "Oseng Oseng Tempe" },
    { value: "Mix Vegetable" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "522,50", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,87", unit: "g" },
          { label: "Karbohidrat", value: "69,35", unit: "g" },
          { label: "Lemak", value: "20,46", unit: "g" },
          { label: "Serat", value: "1,84", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "576,13", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,07", unit: "g" },
          { label: "Karbohidrat", value: "81,69", unit: "g" },
          { label: "Lemak", value: "20,71", unit: "g" },
          { label: "Serat", value: "1,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "477,88", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,82", unit: "g" },
          { label: "Karbohidrat", value: "59,71", unit: "g" },
          { label: "Lemak", value: "20,25", unit: "g" },
          { label: "Serat", value: "1,81", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "760,78", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,93", unit: "g" },
          { label: "Karbohidrat", value: "104,42", unit: "g" },
          { label: "Lemak", value: "26,89", unit: "g" },
          { label: "Serat", value: "2,05", unit: "g" },
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
    lastUpdated: "21 September 2026, 08.22 WITA",
  },
};
