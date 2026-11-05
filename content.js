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
    machineDate: "2026-11-05",
    date: "Kamis, 5 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Asam Manis" },
    { value: "Tempe Mendoan" },
    { value: "Mix Vegetable" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "551,88", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,47", unit: "g" },
          { label: "Karbohidrat", value: "76,23", unit: "g" },
          { label: "Lemak", value: "20,54", unit: "g" },
          { label: "Serat", value: "1,73", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "602,51", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,62", unit: "g" },
          { label: "Karbohidrat", value: "87,67", unit: "g" },
          { label: "Lemak", value: "20,77", unit: "g" },
          { label: "Serat", value: "1,76", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "507,26", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,42", unit: "g" },
          { label: "Karbohidrat", value: "66,59", unit: "g" },
          { label: "Lemak", value: "20,33", unit: "g" },
          { label: "Serat", value: "1,71", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "787,16", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,48", unit: "g" },
          { label: "Karbohidrat", value: "110,41", unit: "g" },
          { label: "Lemak", value: "26,96", unit: "g" },
          { label: "Serat", value: "1,95", unit: "g" },
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
    lastUpdated: "5 November 2026",
  },
};
