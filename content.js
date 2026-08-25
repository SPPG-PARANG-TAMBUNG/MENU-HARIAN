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
    machineDate: "2026-08-26",
    date: "Rabu, 26 Agustus 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Bakar Madu" },
    { value: "Tumis Tempe Kacang Panjang" },
    { value: "Tumis Labu Siam + Jagung
" },
    { value: "Buah Jeruk" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "564,00", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,98", unit: "g" },
          { label: "Karbohidrat", value: "75,48", unit: "g" },
          { label: "Lemak", value: "21,68", unit: "g" },
          { label: "Serat", value: "5,96", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "661,08", unit: "kkal", highlight: true },
          { label: "Protein", value: "24,15", unit: "g" },
          { label: "Karbohidrat", value: "88,89", unit: "g" },
          { label: "Lemak", value: "24,89", unit: "g" },
          { label: "Serat", value: "6,69", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "519,38", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,93", unit: "g" },
          { label: "Karbohidrat", value: "65,84", unit: "g" },
          { label: "Lemak", value: "21,46", unit: "g" },
          { label: "Serat", value: "5,94", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "781,58", unit: "kkal", highlight: true },
          { label: "Protein", value: "28,33", unit: "g" },
          { label: "Karbohidrat", value: "110,39", unit: "g" },
          { label: "Lemak", value: "27,03", unit: "g" },
          { label: "Serat", value: "7,53", unit: "g" },
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
    lastUpdated: "26 Agustus 2026, 03.00 WITA",
  },
};
