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
    machineDate: "2026-11-09",
    date: "Senin, 9 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Bistik Mentega" },
    { value: "Tahu Sambal Tomat" },
    { value: "Tumis Wortel Labu Siam" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "526,00", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,67", unit: "g" },
          { label: "Karbohidrat", value: "58,39", unit: "g" },
          { label: "Lemak", value: "26,14", unit: "g" },
          { label: "Serat", value: "1,99", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "606,03", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,64", unit: "g" },
          { label: "Karbohidrat", value: "69,41", unit: "g" },
          { label: "Lemak", value: "28,89", unit: "g" },
          { label: "Serat", value: "2,09", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "481,38", unit: "kkal", highlight: true },
          { label: "Protein", value: "15,62", unit: "g" },
          { label: "Karbohidrat", value: "48,76", unit: "g" },
          { label: "Lemak", value: "25,93", unit: "g" },
          { label: "Serat", value: "1,96", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "722,08", unit: "kkal", highlight: true },
          { label: "Protein", value: "25,06", unit: "g" },
          { label: "Karbohidrat", value: "89,62", unit: "g" },
          { label: "Lemak", value: "30,75", unit: "g" },
          { label: "Serat", value: "2,21", unit: "g" },
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
    lastUpdated: "9 November 2026",
  },
};
