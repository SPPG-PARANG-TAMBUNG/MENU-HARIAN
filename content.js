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
    machineDate: "2026-09-28",
    date: "Senin, 28 September 2026",
  },

  // Cukup ganti bagian value untuk memperbarui daftar menu.
  // Jangan menekan Enter sebelum tanda kutip penutup.
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Bulat Woku" },
    { value: "Tempe Orek" },
    { value: "Tumis Wortel + Jagung + Sawi Hijau" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "513,56", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,91", unit: "g" },
          { label: "Karbohidrat", value: "65,72", unit: "g" },
          { label: "Lemak", value: "20,46", unit: "g" },
          { label: "Serat", value: "1,31", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "564,19", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,09", unit: "g" },
          { label: "Karbohidrat", value: "76,87", unit: "g" },
          { label: "Lemak", value: "20,69", unit: "g" },
          { label: "Serat", value: "1,45", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "468,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,86", unit: "g" },
          { label: "Karbohidrat", value: "56,08", unit: "g" },
          { label: "Lemak", value: "20,25", unit: "g" },
          { label: "Serat", value: "1,29", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "748,84", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,98", unit: "g" },
          { label: "Karbohidrat", value: "99,32", unit: "g" },
          { label: "Lemak", value: "26,86", unit: "g" },
          { label: "Serat", value: "1,75", unit: "g" },
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
    lastUpdated: "28 September 2026, 09.16 WITA",
  },
};
