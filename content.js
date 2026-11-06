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
    machineDate: "2026-11-06",
    date: "Jumat, 6 November 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Ayam Bakar Padang + Sambal Tomat Hijau" },
    { value: "Tumis Tahu Kacang Panjang + Wortel" },
    { value: "Buah Pisang Emas" },
    ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "520,15", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,27", unit: "g" },
          { label: "Karbohidrat", value: "69,41", unit: "g" },
          { label: "Lemak", value: "20,74", unit: "g" },
          { label: "Serat", value: "1,63", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "604,39", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,29", unit: "g" },
          { label: "Karbohidrat", value: "81,70", unit: "g" },
          { label: "Lemak", value: "23,48", unit: "g" },
          { label: "Serat", value: "1,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "475,52", unit: "kkal", highlight: true },
          { label: "Protein", value: "16,22", unit: "g" },
          { label: "Karbohidrat", value: "59,77", unit: "g" },
          { label: "Lemak", value: "20,53", unit: "g" },
          { label: "Serat", value: "1,60", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "732,54", unit: "kkal", highlight: true },
          { label: "Protein", value: "26,57", unit: "g" },
          { label: "Karbohidrat", value: "101,22", unit: "g" },
          { label: "Lemak", value: "26,57", unit: "g" },
          { label: "Serat", value: "1,94", unit: "g" },
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
    lastUpdated: "6 November 2026",
  },
};
