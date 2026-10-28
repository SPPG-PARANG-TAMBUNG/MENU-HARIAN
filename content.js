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
    machineDate: "2026-10-28",
    date: "Rabu, 28 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Udang Crispy" },
    { value: "Tahu Saos Tiram" },
    { value: "Tumis Kol Wortel" },
    { value: "Buah Melon" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "511,49", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,80", unit: "g" },
          { label: "Karbohidrat", value: "66,17", unit: "g" },
          { label: "Lemak", value: "19,10", unit: "g" },
          { label: "Serat", value: "1,64", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "572,61", unit: "kkal", highlight: true },
          { label: "Protein", value: "24,07", unit: "g" },
          { label: "Karbohidrat", value: "77,38", unit: "g" },
          { label: "Lemak", value: "19,41", unit: "g" },
          { label: "Serat", value: "1,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "466,86", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,75", unit: "g" },
          { label: "Karbohidrat", value: "56,53", unit: "g" },
          { label: "Lemak", value: "18,88", unit: "g" },
          { label: "Serat", value: "1,61", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "698,66", unit: "kkal", highlight: true },
          { label: "Protein", value: "31,60", unit: "g" },
          { label: "Karbohidrat", value: "97,68", unit: "g" },
          { label: "Lemak", value: "21,30", unit: "g" },
          { label: "Serat", value: "2,04", unit: "g" },
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
    lastUpdated: "28 Oktober 2026",
  },
};
