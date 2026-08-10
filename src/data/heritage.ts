/**
 * heritage.ts — copy for "The Heritage" section (sejarah 1940 & Nasi Liwet).
 *
 * Sumber riset:
 * - Wikipedia: Duwet, Baki, Sukoharjo & Nasi Liwet Sukoharjo
 * - Espos.id: sejarah pabrik gula & Buklondo di Kec. Baki; profil Tomblok,
 *   guru nasi liwet asal Desa Duwet
 * - Detik/Antara/Jateng Prov: penetapan 16 WBTB Jawa Tengah 2023
 * - Data riset resmi yang diberikan pengguna (S. Sastro Saputro, dukuh eks
 *   Kelurahan Nanggulan & Duwet)
 */

export type TimelineEntry = {
  year: string;
  label: string;
};

export const heritageContent = {
  kicker: "Bagian I — Warisan",
  title: "Dari Dua Kelurahan, Lahir Satu Desa",
  intro:
    "Desa Duwet bukan sekadar titik di peta Sukoharjo. Ia adalah hasil penggabungan dua kelurahan tua, bekas tanah konsesi kolonial, dan — di atas segalanya — dapur tempat sebuah warisan kuliner nasional dijaga turun-temurun.",

  merger: {
    heading: "Merger Bersejarah, 1940",
    body:
      "Secara administratif, Desa Duwet terbentuk pada tahun 1940 dari penggabungan dua kelurahan: Kelurahan Nanggulan dan Kelurahan Duwet. Dua identitas, satu desa — dan satu warisan yang sama untuk dijaga.",
    formerKelurahan: [
      {
        name: "Kelurahan Nanggulan",
        hamlets: ["Temuireng", "Nanggulan", "Tinggen"],
      },
      {
        name: "Kelurahan Duwet",
        hamlets: ["Poko", "Karangasem", "Duwet"],
      },
    ],
    firstLeader: { name: "S. Sastro Saputro", period: "1940 – 1951" },
    leadershipNote:
      "Hingga tahun 2023, tercatat sudah 10 kali pergantian kepala desa — sepuluh generasi pemimpin yang mewariskan tongkat estafet yang sama.",
  },

  colonial: {
    heading: "Jejak Kolonial di Tanah Agraris",
    body:
      "Di wilayah eks-Kelurahan Nanggulan, dulu berdiri sebuah pabrik gula peninggalan Belanda — bukti bahwa tanah ini adalah kawasan agraris yang sangat produktif sejak era kolonial, penghasil tebu, nila, dan tembakau. Seluruh Kecamatan Baki dahulu dikepung empat pabrik besar milik pemerintah kolonial, dan jejaknya masih berdiri hingga kini pada jembatan tua Buklondo (dari kata Belanda brug — jembatan, dan boogen — lengkung) di tepi Kali Baki.",
  },

  nasiLiwet: {
    heading: "Dapur Nasi Liwet Sejak Mataram Islam",
    lede:
      "Bersama Desa Menuran, Desa Duwet adalah dapur utama dan tempat asal-usul para pengrajin legendaris Nasi Liwet — hidangan nasi gurih santan yang kini menjadi identitas Sukoharjo, dan Solo, di mata Indonesia.",
    body: [
      "Meracik nasi liwet bukan tren baru di desa ini. Tradisi ini adalah warisan turun-temurun yang dipercaya bermula sejak berdirinya Kerajaan Mataram Islam pada 1582 — hampir empat setengah abad yang lalu. Pada masanya, kuliner dari desa-desa ini kabarnya kerap disajikan untuk kalangan bangsawan keraton.",
      "Serat Centhini, manuskrip Jawa yang ditulis pada 1814–1823, bahkan mencatat nasi liwet sebagai sajian yang dihidangkan saat gempa bumi melanda tanah Jawa — semacam ritual syukur dan penolak bala. Sebagian catatan juga menautkannya dengan nasi samin kegemaran Nabi Muhammad, yang diadaptasi warga lokal menyesuaikan bahan yang tersedia di tanah Jawa.",
      "Setiap hari, ratusan warga Duwet dan Menuran masih meneruskan tradisi ini: menanak nasi bersantan sejak dini hari, membungkusnya di atas pincuk daun pisang, lalu menyebar menjajakannya ke seluruh penjuru Kota Surakarta sebelum kota itu benar-benar terbangun.",
    ],
    servedWith: [
      "Nasi gurih tanak santan",
      "Sayur labu siam / jipang berkuah",
      "Telur pindang & suwiran ayam",
      "Sambal goreng ati-ampela",
      "Disajikan di atas pincuk daun pisang",
    ],
    milestones: [
      { year: "1582", label: "Tradisi meracik nasi liwet dimulai sejak berdirinya Kerajaan Mataram Islam." },
      { year: "1814–1823", label: "Dicatat dalam Serat Centhini sebagai sajian syukur & penolak bala saat gempa." },
      { year: "Abad ke-19", label: "Populer di lingkungan Keraton Kasunanan Surakarta pada masa Pakubuwono IX." },
      { year: "1934", label: "Warga Menuran & Duwet mulai menjual langsung ke Kota Surakarta." },
      { year: "Des 2012", label: "Dinobatkan sebagai satu dari 30 ikon kuliner tradisional Nusantara." },
      { year: "19 Jun 2022", label: "Ditetapkan sebagai ikon kuliner Kota Surakarta (Solo)." },
      { year: "2023", label: "Resmi menjadi Warisan Budaya Takbenda Republik Indonesia." },
    ] as TimelineEntry[],
    closing:
      "Sepuluh kali kepala desa berganti, satu pabrik gula Belanda telah lama sunyi — namun kukusan nasi liwet di dapur-dapur Duwet tidak pernah berhenti mengepul.",
  },
};
