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
    machineDate: "2026-10-20",
    date: "Selasa, 20 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Ceplok Balado" },
    { value: "Tempe Crispy Daun Jeruk" },
    { value: "Tumis Sawi Hijau Jagung Wortel" },
    { value: "Buah Apel" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "561,89", unit: "kkal", highlight: true },
          { label: "Protein", value: "19,19", unit: "g" },
          { label: "Karbohidrat", value: "77,68", unit: "g" },
          { label: "Lemak", value: "20,77", unit: "g" },
          { label: "Serat", value: "2,88", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "618,12", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,30", unit: "g" },
          { label: "Karbohidrat", value: "90,30", unit: "g" },
          { label: "Lemak", value: "21,06", unit: "g" },
          { label: "Serat", value: "3,43", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "517,26", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,14", unit: "g" },
          { label: "Karbohidrat", value: "68,04", unit: "g" },
          { label: "Lemak", value: "20,56", unit: "g" },
          { label: "Serat", value: "2,86", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "796,77", unit: "kkal", highlight: true },
          { label: "Protein", value: "30,06", unit: "g" },
          { label: "Karbohidrat", value: "111,24", unit: "g" },
          { label: "Lemak", value: "27,23", unit: "g" },
          { label: "Serat", value: "3,62", unit: "g" },
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
    lastUpdated: "20 Oktober 2026",
  },
};
