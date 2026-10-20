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
    machineDate: "2026-10-21",
    date: "Rabu, 21 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Crispy" },
    { value: "Tahu Saos BBQ" },
    { value: "Tumis Labu Siam Jagung" },
    { value: "Buah Melon" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "585,42", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,18", unit: "g" },
          { label: "Karbohidrat", value: "71,68", unit: "g" },
          { label: "Lemak", value: "26,00", unit: "g" },
          { label: "Serat", value: "2,47", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "667,25", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,17", unit: "g" },
          { label: "Karbohidrat", value: "82,88", unit: "g" },
          { label: "Lemak", value: "28,79", unit: "g" },
          { label: "Serat", value: "2,70", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "540,79", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,13", unit: "g" },
          { label: "Karbohidrat", value: "62,04", unit: "g" },
          { label: "Lemak", value: "25,79", unit: "g" },
          { label: "Serat", value: "2,45", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "791,10", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,42", unit: "g" },
          { label: "Karbohidrat", value: "103,09", unit: "g" },
          { label: "Lemak", value: "31,45", unit: "g" },
          { label: "Serat", value: "2,87", unit: "g" },
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
    lastUpdated: "21 Oktober 2026",
  },
};
