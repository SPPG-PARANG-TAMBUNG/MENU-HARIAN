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
    machineDate: "2026-10-26",
    date: "Senin, 26 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Bumbu Rendang" },
    { value: "Martabak Tahu" },
    { value: "Tumis Labu Siam Jagung" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "580,80", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,23", unit: "g" },
          { label: "Karbohidrat", value: "69,11", unit: "g" },
          { label: "Lemak", value: "26,73", unit: "g" },
          { label: "Serat", value: "2,01", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "660,83", unit: "kkal", highlight: true },
          { label: "Protein", value: "21,20", unit: "g" },
          { label: "Karbohidrat", value: "80,13", unit: "g" },
          { label: "Lemak", value: "29,49", unit: "g" },
          { label: "Serat", value: "2,11", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "536,18", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,18", unit: "g" },
          { label: "Karbohidrat", value: "59,47", unit: "g" },
          { label: "Lemak", value: "26,52", unit: "g" },
          { label: "Serat", value: "1,98", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "783,78", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,44", unit: "g" },
          { label: "Karbohidrat", value: "100,25", unit: "g" },
          { label: "Lemak", value: "32,12", unit: "g" },
          { label: "Serat", value: "2,22", unit: "g" },
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
    lastUpdated: "26 Oktober 2026",
  },
};
