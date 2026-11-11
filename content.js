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
    machineDate: "2026-11-11",
    date: "Rabu, 11 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Bakso Ayam Pedas Manis" },
    { value: "Tahu Crispy" },
    { value: "Cah Buncis Jagung" },
    { value: "Buah Jeruk Siam Madu" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "566,83", unit: "kkal", highlight: true },
          { label: "Protein", value: "22,14", unit: "g" },
          { label: "Karbohidrat", value: "90,71", unit: "g" },
          { label: "Lemak", value: "13,99", unit: "g" },
          { label: "Serat", value: "2,11", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "639,96", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,32", unit: "g" },
          { label: "Karbohidrat", value: "102,58", unit: "g" },
          { label: "Lemak", value: "15,02", unit: "g" },
          { label: "Serat", value: "2,42", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "522,21", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,09", unit: "g" },
          { label: "Karbohidrat", value: "81,07", unit: "g" },
          { label: "Lemak", value: "13,78", unit: "g" },
          { label: "Serat", value: "2,09", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "754,96", unit: "kkal", highlight: true },
          { label: "Protein", value: "32,08", unit: "g" },
          { label: "Karbohidrat", value: "122,02", unit: "g" },
          { label: "Lemak", value: "16,77", unit: "g" },
          { label: "Serat", value: "2,49", unit: "g" },
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
    lastUpdated: "11 November 2026",
  },
};
