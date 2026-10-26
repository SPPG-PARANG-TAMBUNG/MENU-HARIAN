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
    machineDate: "2026-10-27",
    date: "Selasa, 27 Oktober 2026",
  },

  // Urutan 5 sekat standar Ompreng SUS304 (bebas ganti nama menu setiap hari):
  // Baris 1: Makanan Pokok / Karbohidrat (Cekungan Bulat Kiri Bawah)
  // Baris 2: Lauk Protein Hewani (Cekungan Oval Lebar Kanan Bawah)
  // Baris 3: Lauk Protein Nabati (Cekungan Kapsul Kanan Atas)
  // Baris 4: Sayuran & Serat (Cekungan Kapsul Kiri Atas)
  // Baris 5: Buah / Pencuci Mulut (Cekungan Persegi Tengah Atas)
  menu: [
    { value: "Nasi Putih" },
    { value: "Telur Bulat Woku Kemangi" },
    { value: "Kering Tempe" },
    { value: "Tumis Sawi Hijau Jagung Kembang Kol" },
    { value: "Buah Anggur" },
  ],

  // Ganti nilai setiap kelompok sesuai perhitungan petugas/ahli gizi.
  nutrition: {
    groups: [
      {
        name: "Porsi Kecil",
        items: [
          { label: "Energi", value: "513,31", unit: "kkal", highlight: true },
          { label: "Protein", value: "18,89", unit: "g" },
          { label: "Karbohidrat", value: "67,12", unit: "g" },
          { label: "Lemak", value: "20,45", unit: "g" },
          { label: "Serat", value: "0,61", unit: "g" },
        ],
      },
      {
        name: "Porsi Besar",
        items: [
          { label: "Energi", value: "563,94", unit: "kkal", highlight: true },
          { label: "Protein", value: "20,04", unit: "g" },
          { label: "Karbohidrat", value: "78,55", unit: "g" },
          { label: "Lemak", value: "20,69", unit: "g" },
          { label: "Serat", value: "0,64", unit: "g" },
        ],
      },
      {
        name: "Porsi Balita",
        items: [
          { label: "Energi", value: "468,69", unit: "kkal", highlight: true },
          { label: "Protein", value: "17,84", unit: "g" },
          { label: "Karbohidrat", value: "57,48", unit: "g" },
          { label: "Lemak", value: "20,24", unit: "g" },
          { label: "Serat", value: "0,59", unit: "g" },
        ],
      },
      {
        name: "Porsi Bumil Busui",
        items: [
          { label: "Energi", value: "748,59", unit: "kkal", highlight: true },
          { label: "Protein", value: "29,90", unit: "g" },
          { label: "Karbohidrat", value: "101,29", unit: "g" },
          { label: "Lemak", value: "26,87", unit: "g" },
          { label: "Serat", value: "0,83", unit: "g" },
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
    lastUpdated: "27 Oktober 2026",
  },
};
