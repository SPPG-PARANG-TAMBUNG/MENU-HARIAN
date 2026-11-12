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
    machineDate: "2026-11-12",
    date: "Kamis, 12 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Udang Tumis Bawang Putih" },
    { value: "Bola Bola Tahu" },
    { value: "Tumis Wortel Pakcoy" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "471,17", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,51", unit: "g" },
          { label: "Karbohidrat", value: "63,71", unit: "g" },
          { label: "Lemak", value: "15,98", unit: "g" },
          { label: "Serat", value: "0,85", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "530,49", unit: "kkal", highlight: true },
          { label: "Protein", value: "23,76", unit: "g" },
          { label: "Karbohidrat", value: "74,73", unit: "g" },
          { label: "Lemak", value: "16,26", unit: "g" },
          { label: "Serat", value: "0,95", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "426,54", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,46", unit: "g" },
          { label: "Karbohidrat", value: "54,07", unit: "g" },
          { label: "Lemak", value: "15,77", unit: "g" },
          { label: "Serat", value: "0,82", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "647,64", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,19", unit: "g" },
          { label: "Karbohidrat", value: "94,87", unit: "g" },
          { label: "Lemak", value: "17,66", unit: "g" },
          { label: "Serat", value: "1,06", unit: "g" },
        ],
      },
    ],
  },

  safety: {
    consumption: "Batas aman konsumsi 2 jam setelah makanan diterima.",
    allergy:
      "Jika ada penerima manfaat yang memiliki riwayat alergi tertentu, silakan sampaikan segera.",
  },

  sppg: {
    name: "SPPG Parang Tambung Kota Makassar",
    unit: "Satuan Pelayanan Pemenuhan Gizi",
    address: "Parang Tambung, Kota Makassar, Sulawesi Selatan",
    instagramLabel: "@sppg.parangtambung",
    instagramUrl: "https://www.instagram.com/sppgparangtambung",
    lastUpdated: "12 November 2026",
  },
};
