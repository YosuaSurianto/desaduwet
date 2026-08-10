/**
 * umkm.ts — copy for the "Sentra Ekonomi & UMKM" section.
 */

export type UmkmPillar = {
  title: string;
  body: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Honest sourcing: these are illustrative stock photos, not on-location
   * photography of Desa Duwet, so every card says so explicitly. */
  credit: string;
};

export const umkmContent = {
  kicker: "Bagian III — Ekonomi Kreatif",
  title: "Dapur Rakyat, Panggung Rakyat",
  intro:
    "Ekonomi Desa Duwet ditopang oleh dapur-dapur rumahan dan tangan-tangan kreatif warganya — sebagian menjajakan nasi liwet ke Solo, sebagian lain merajut kerajinan dan menghidupkan festival yang mempertemukan keduanya setahun sekali.",

  pillars: [
    {
      title: "Sentra Penjual Nasi Liwet",
      body:
        "Sebagian besar warga Duwet berprofesi sebagai penjual nasi liwet turun-temurun, berangkat setiap pagi menyebar ke penjuru Kota Surakarta — dapur rumahan yang menjadi tulang punggung ekonomi desa.",
    },
    {
      title: "Festival Kuliner & UMKM Desa",
      body:
        "Digelar rutin setiap tahun, festival ini memamerkan produk olahan warga: dari nasi liwet, jajanan pasar, hingga kerajinan tangan karya pemuda desa melalui Karang Taruna.",
    },
    {
      title: "Tradisi Bersih Desa",
      body:
        "Ritual gotong royong dan syukuran warga yang masih lestari setiap tahun — warisan budaya hidup yang menjaga kekompakan sosial di balik roda ekonomi desa.",
    },
  ] as UmkmPillar[],

  /**
   * Illustrative gallery — real on-site photos of Duwet's own UMKM stalls,
   * festival, and craftwork don't exist yet in this project, so rather than
   * risk mislabeling an unrelated photo as "Desa Duwet", every image here
   * is captioned for what it honestly is: a stock photo standing in for the
   * theme. Swap `src` for real village photography whenever it's shot.
   */
  gallery: [
    {
      src: "https://images.pexels.com/photos/31694686/pexels-photo-31694686.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Pedagang menyiapkan kudapan tradisional Jawa di sebuah warung",
      caption: "Kudapan pasar tradisional — semangat yang sama menyala di setiap Festival Kuliner & UMKM Desa.",
      credit: "Foto ilustrasi · wd toro / Pexels",
    },
    {
      src: "https://images.pexels.com/photos/33807991/pexels-photo-33807991.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Anak-anak Indonesia bermain permainan tradisional bersama di luar ruangan",
      caption: "Dolanan anak tradisional — riuh setiap kali desa merayakan Lomba Dolanan Anak.",
      credit: "Foto ilustrasi · rakhmat suwandi / Pexels",
    },
    {
      src: "https://images.pexels.com/photos/19104382/pexels-photo-19104382.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Petani memanen padi di tengah sawah hijau",
      caption: "Hasil bumi sawah — sumber yang setiap dini hari menghidupi kukusan nasi liwet.",
      credit: "Foto ilustrasi · Dhenny Napitupulu / Pexels",
    },
  ] as GalleryItem[],

  tickerItems: [
    "Nasi Liwet",
    "Karak & Kerupuk Kulit",
    "Kerajinan Tangan Karang Taruna",
    "Jajanan Pasar Tradisional",
    "Dolanan Anak Tradisional",
    "Hasil Bumi Sawah Duwet",
  ],

  testimonials: [
    {
      quote: "Nasi liwet di Desa Duwet benar-benar otentik — rasa santannya beda dari yang biasa saya makan di kota.",
      author: "Pengunjung dari Bandung",
    },
    {
      quote: "Duwet Waterpark bersih dan nyaman untuk keluarga, dan sawahnya bikin anak-anak betah belajar hal baru.",
      author: "Pengunjung dari Surabaya",
    },
  ] as Testimonial[],
};
