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
    machineDate: "2026-09-25",
    date: "Jumat, 25 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Udang Crispy" },
    { value: "Tahu Tumis Kecap" },
    { value: "Tumis Labu Siam + Jagung" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "538,85", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,48", unit: "g" },
          { label: "Karbohidrat", value: "80,80", unit: "g" },
          { label: "Lemak", value: "15,87", unit: "g" },
          { label: "Serat", value: "2,62", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "605,28", unit: "kkal", highlight: true },
          { label: "Protein", value: "24,77", unit: "g" },
          { label: "Karbohidrat", value: "93,80", unit: "g" },
          { label: "Lemak", value: "16,12", unit: "g" },
          { label: "Serat", value: "2,79", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "494,23", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,43", unit: "g" },
          { label: "Karbohidrat", value: "71,16", unit: "g" },
          { label: "Lemak", value: "15,66", unit: "g" },
          { label: "Serat", value: "2,60", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "723,08", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,19", unit: "g" },
          { label: "Karbohidrat", value: "113,32", unit: "g" },
          { label: "Lemak", value: "17,97", unit: "g" },
          { label: "Serat", value: "2,87", unit: "g" },
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
    lastUpdated: "25 September 2026, 07.52 WITA",
  },
};
