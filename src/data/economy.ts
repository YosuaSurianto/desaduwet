/**
 * economy.ts — copy for the "Ekonomi" section.
 *
 * Scope deliberately narrowed to what's independently verifiable for Desa
 * Duwet itself: nasi liwet trading and padi/sawah farming. Other livelihoods
 * mentioned informally (brick-making, poultry, livestock) turned up sourcing
 * only for the neighbouring village of Menuran, not Duwet, so they're left
 * out here rather than presented as fact.
 *
 * Sumber: Espos.id ("Berkenalan dengan Tomblok", "Nasi Liwet Jadi Ikon Solo,
 * Intip Sentra Pembuatannya di Duwet Sukoharjo", "Kisah Nyai Lenggi Asal Desa
 * Duwet Sentra Pembuat Nasi Liwet", "Desa Duwet Sukoharjo Siap Dipoles Jadi
 * Kampung Nasi Liwet").
 */

export type EconomyPillar = {
  title: string;
  body: string;
};

export type EconomyFigure = {
  name: string;
  role: string;
  story: string;
  source: string;
};

export const economyContent = {
  kicker: "Dapur & Sawah Duwet",
  title: "Nasi Liwet dan Padi, Dua Nadi Ekonomi Duwet",
  intro:
    "Sebagian besar warga Duwet menggantungkan hidup dari dua hal: menjual nasi liwet turun-temurun ke Solo, dan menggarap sawah yang mengelilingi permukiman sepuluh dukuh. Dua pekerjaan ini saling menopang, karena beras dan santan yang ditanak setiap dini hari berasal dari sawah yang sama.",

  pillars: [
    {
      title: "Sentra Penjual Nasi Liwet",
      body:
        "Sebagian besar warga Duwet berprofesi sebagai penjual nasi liwet turun-temurun, berangkat setiap pagi menyebar ke penjuru Kota Surakarta dari dapur rumahan yang menjadi tulang punggung ekonomi desa.",
    },
    {
      title: "Sawah yang Menghidupi Dapur",
      body:
        "Hamparan sawah yang mengelilingi sepuluh dukuh Duwet bukan cuma pemandangan, tapi sumber beras yang ditanak jadi nasi liwet setiap dini hari, sekaligus mata pencaharian petani yang menggarapnya turun-temurun.",
    },
  ] as EconomyPillar[],

  figures: [
    {
      name: "Tomblok",
      role: "Guru nasi liwet, sekitar 40 tahun berjualan",
      story:
        "Berjualan nasi liwet sejak muda, Tomblok dikenal luas sebagai salah satu guru pembuat nasi liwet yang diundang berbagi resep ke berbagai kota, dan pernah digandeng perusahaan Batik Keris untuk acara khusus. Ia masih menanak dan menjual nasi liwet di Nonongan, Solo, dibantu adik dan keponakannya.",
      source: "Espos.id",
    },
    {
      name: "Nyai Lenggi",
      role: "Tokoh sentra pembuat nasi liwet",
      story:
        "Salah satu nama yang lekat dengan sejarah dapur nasi liwet Duwet, resepnya diwariskan dari generasi ke generasi hingga sekarang.",
      source: "Espos.id",
    },
    {
      name: "Mbak Yanti",
      role: "Penjual nasi liwet Desa Duwet",
      story:
        "Generasi penjual nasi liwet yang meneruskan resep keluarga, salah satu dari ratusan dapur rumahan Duwet yang masih aktif menanak nasi liwet setiap hari.",
      source: "liputan video kuliner",
    },
  ] as EconomyFigure[],

  honestNote:
    "Meski ratusan keluarga menjadikan nasi liwet sebagai penghasilan utama, Desa Duwet belum punya kelompok atau asosiasi resmi pembuat nasi liwet. Beberapa waktu lalu, kepala desa saat itu menyampaikan rencana mengusulkan lokasi jualan khusus nasi liwet ke Pemerintah Kabupaten Sukoharjo, agar para penjual punya tempat yang lebih tertata dan mudah ditemukan wisatawan.",

  tickerItems: [
    "Nasi Liwet",
    "Sego Gurih Santan",
    "Telur Pindang",
    "Sambal Goreng Ati Ampela",
    "Pincuk Daun Pisang",
    "Padi Sawah Duwet",
  ],
};
