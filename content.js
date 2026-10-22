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
    machineDate: "2026-10-22",
    date: "Kamis, 22 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Bulat Bumbu Bali" },
    { value: "Nugget Tempe" },
    { value: "Tumis Kol Wortel" },
    { value: "Buah Kelengkeng" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "536,56", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,33", unit: "g" },
          { label: "Karbohidrat", value: "71,21", unit: "g" },
          { label: "Lemak", value: "20,56", unit: "g" },
          { label: "Serat", value: "1,73", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "587,19", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,51", unit: "g" },
          { label: "Karbohidrat", value: "82,37", unit: "g" },
          { label: "Lemak", value: "20,79", unit: "g" },
          { label: "Serat", value: "1,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "491,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,28", unit: "g" },
          { label: "Karbohidrat", value: "61,58", unit: "g" },
          { label: "Lemak", value: "20,35", unit: "g" },
          { label: "Serat", value: "1,70", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "771,84", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,40", unit: "g" },
          { label: "Karbohidrat", value: "104,82", unit: "g" },
          { label: "Lemak", value: "26,96", unit: "g" },
          { label: "Serat", value: "2,16", unit: "g" },
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
    lastUpdated: "22 Oktober 2026",
  },
};
