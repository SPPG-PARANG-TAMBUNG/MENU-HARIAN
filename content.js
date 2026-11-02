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
    machineDate: "2026-11-02",
    date: "Senin, 2 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Kecap Bawang Bombay" },
    { value: "Sempol Tahu" },
    { value: "Tumis Wortel Sawi Putih" },
    { value: "Buah Semangka" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "539,77", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,15", unit: "g" },
          { label: "Karbohidrat", value: "62,35", unit: "g" },
          { label: "Lemak", value: "25,85", unit: "g" },
          { label: "Serat", value: "0,87", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "619,79", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,12", unit: "g" },
          { label: "Karbohidrat", value: "73,37", unit: "g" },
          { label: "Lemak", value: "28,60", unit: "g" },
          { label: "Serat", value: "0,98", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "495,14", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,10", unit: "g" },
          { label: "Karbohidrat", value: "52,72", unit: "g" },
          { label: "Lemak", value: "25,64", unit: "g" },
          { label: "Serat", value: "0,85", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "750,74", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,45", unit: "g" },
          { label: "Karbohidrat", value: "93,58", unit: "g" },
          { label: "Lemak", value: "31,71", unit: "g" },
          { label: "Serat", value: "1,10", unit: "g" },
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
    lastUpdated: "2 November 2026",
  },
};
