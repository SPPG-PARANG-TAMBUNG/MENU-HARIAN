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
    machineDate: "2026-08-31",
    date: "Senin, 31 Agustus 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Udang Saos Padang" },
    { value: "Tahu Crispy" },
    { value: "Tumis Buncis + Wortel" },
    { value: "Buah Pisang Emas" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "466,63", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,09", unit: "g" },
          { label: "Karbohidrat", value: "76,70", unit: "g" },
          { label: "Lemak", value: "10,89", unit: "g" },
          { label: "Serat", value: "1,47", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "535,06", unit: "kkal", highlight: true },
          { label: "Protein", value: "22,38", unit: "g" },
          { label: "Karbohidrat", value: "89,71", unit: "g" },
          { label: "Lemak", value: "11,14", unit: "g" },
          { label: "Serat", value: "1,64", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "422,01", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,04", unit: "g" },
          { label: "Karbohidrat", value: "67,07", unit: "g" },
          { label: "Lemak", value: "10,68", unit: "g" },
          { label: "Serat", value: "1,45", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil & Busui",
        items: [
          { label: "Energi", value: "655,41", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,85", unit: "g" },
          { label: "Karbohidrat", value: "109,24", unit: "g" },
          { label: "Lemak", value: "13,00", unit: "g" },
          { label: "Serat", value: "1,72", unit: "g" },
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
    lastUpdated: "31 Agustus 2026, 03.00 WITA",
  },
};
