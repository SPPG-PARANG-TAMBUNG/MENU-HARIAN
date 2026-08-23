/*
  ================================================================
  FILE YANG DIEDIT SETIAP KALI MENU BERUBAH
  ================================================================

  Ganti teks yang berada di antara tanda kutip.
  Pertahankan tanda kutip, koma, kurung, dan nama bagian agar halaman tetap bekerja.
*/

window.LABEL_DATA = {
  page: {
    title: "Menu Hari Ini | SPPG Parang Tambung",
    description: "Informasi menu, jadwal konsumsi, kandungan gizi, dan alergen SPPG.",
    programName: "Program Makan Bergizi Gratis",
    eyebrow: "Informasi sajian",
    heading: "Menu Bergizi Hari Ini",
    intro: "Lihat menu, informasi gizi, alergen, dan panduan konsumsi dalam satu halaman.",
  },

  serving: {
    // Format machineDate harus TAHUN-BULAN-TANGGAL.
    machineDate: "2026-08-24",
    date: "Senin, 24 Agustus 2026",
    batchCode: "MBG-2026-001",
    distributionTime: "10.00 WITA",
    consumeBy: "12.00 WITA",
    consumptionGuidance: "Disarankan dikonsumsi maksimal 2 jam setelah makanan diterima.",
    storageGuidance:
      "Simpan dalam keadaan tertutup. Jangan dikonsumsi jika kemasan rusak, berbau tidak normal, atau melewati batas waktu.",
  },

  menu: [
    { label: "Makanan pokok", value: "SIRIP HIUUUU" },
    { label: "Lauk utama", value: "Ayam kecap" },
    { label: "Lauk pendamping", value: "Tahu kukus" },
    { label: "Sayur", value: "Tumis buncis & wortel" },
    { label: "Buah", value: "Pisang ambon" },
  ],

  nutrition: {
    note: "Nilai merupakan estimasi sajian.",
    items: [
      { label: "Energi", value: "610", unit: "kkal", highlight: true },
      { label: "Protein", value: "26", unit: "g" },
      { label: "Karbohidrat", value: "82", unit: "g" },
      { label: "Lemak", value: "19", unit: "g" },
      { label: "Serat", value: "8", unit: "g" },
    ],
  },

  allergens: {
    // Gunakan [] jika tidak ada alergen, misalnya: contains: []
    contains: ["Kedelai"],
    mayContain: ["Telur"],
    note: "Jika memiliki alergi tertentu, konfirmasikan kepada petugas sebelum mengonsumsi.",
  },

  sppg: {
    name: "SPPG Parang Tambung",
    unit: "Satuan Pelayanan Pemenuhan Gizi",
    shortLocation: "Parang Tambung",
    address: "Parang Tambung, Makassar, Sulawesi Selatan",
    contact: "08xx-xxxx-xxxx",
    lastUpdated: "23 Agustus 2026, 17.00 WITA",
  },
};
