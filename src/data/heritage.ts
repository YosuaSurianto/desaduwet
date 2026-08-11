/**
 * heritage.ts — copy for the "Sejarah" section (merger 1940 & Nasi Liwet).
 *
 * Sumber riset:
 * - Wikipedia: Duwet, Baki, Sukoharjo & Nasi Liwet Sukoharjo
 * - Espos.id: sejarah Buklondo & pabrik gula kolonial di Kec. Baki; profil
 *   Tomblok & Nyai Lenggi, guru/sentra nasi liwet asal Desa Duwet; asal-mula
 *   nasi liwet di Menuran & Duwet
 * - Radar Solo (Jawapos): sejarah Kanal Baki peninggalan kolonial
 * - jatengprov.go.id: penetapan 16 WBTB Jawa Tengah 2023
 * - Data riset resmi yang diberikan pengguna (S. Sastro Saputro, dukuh eks
 *   Kelurahan Nanggulan & Duwet)
 *
 * Catatan akurasi: riset ulang (Agustus 2026) menemukan bahwa pabrik gula
 * kolonial dan bangunan Buklondo yang sering disebut-sebut ternyata berlokasi
 * di Desa Bentakan dan desa lain se-Kecamatan Baki, bukan di tanah Duwet
 * sendiri. Bagian kolonial di bawah ini sengaja dibingkai sebagai konteks
 * regional Kecamatan Baki, bukan klaim bahwa bangunannya berdiri di Duwet.
 */

export type TimelineEntry = {
  year: string;
  label: string;
};

export type VillageLeader = {
  name: string;
  period: string;
};

export const heritageContent = {
  kicker: "Warisan & Sejarah Duwet",
  title: "Dari Dua Kelurahan, Lahir Satu Desa",
  intro:
    "Desa Duwet bukan sekadar titik di peta Sukoharjo. Ia adalah hasil penggabungan dua kelurahan tua, tumbuh di tengah kawasan agraris Kecamatan Baki, dan yang paling penting, dapur tempat sebuah warisan kuliner nasional dijaga turun-temurun.",

  merger: {
    heading: "Merger Bersejarah, 1940",
    body:
      "Secara administratif, Desa Duwet terbentuk pada tahun 1940 dari penggabungan dua kelurahan: Kelurahan Nanggulan dan Kelurahan Duwet. Dua identitas, satu desa, dan satu warisan yang sama untuk dijaga.",
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
    leaders: [
      { name: "S. Sastro Saputro", period: "1940 sampai 1951" },
      { name: "Sudarno", period: "1952 sampai 1965" },
    ] as VillageLeader[],
    leadershipNote:
      "Hingga tahun 2023, tercatat sudah 10 kali pergantian kepala desa, sepuluh generasi pemimpin yang mewariskan tongkat estafet yang sama.",
  },

  colonial: {
    heading: "Bekas Ladang Kolonial di Kecamatan Baki",
    body:
      "Sebelum jadi sentra nasi liwet, kawasan Kecamatan Baki (termasuk Duwet) adalah wilayah agraris yang subur. Sebelum tahun 1860-an, Baki sudah dikepung pabrik gula di Temulus dan Bentakan serta pabrik nila di Gentan dan Ngruki, lalu menyusul pabrik baru di Baki Pandeyan dan Gawok. Peninggalan kolonial yang masih berdiri hingga kini adalah Buklondo, bangunan kanal dan bendungan sepanjang sekitar 50 meter di Desa Bentakan, dibangun tahun 1917 untuk mengairi ladang tebu dan tembakau. Namanya berasal dari kata Belanda brug (jembatan) dan boogen (lengkung), digabung dengan kata Jawa buk (tembok rendah) dan londo (Belanda).",
  },

  nasiLiwet: {
    heading: "Dapur Nasi Liwet Sejak Mataram Islam",
    lede:
      "Bersama Desa Menuran, Desa Duwet adalah dapur utama dan tempat asal usul para pengrajin legendaris Nasi Liwet, hidangan nasi gurih santan yang kini menjadi identitas Sukoharjo dan Solo di mata Indonesia.",
    body: [
      "Meracik nasi liwet bukan tren baru di desa ini. Tradisi ini adalah warisan turun-temurun yang dipercaya bermula sejak berdirinya Kerajaan Mataram Islam pada 1582, hampir empat setengah abad yang lalu. Pada masanya, kuliner dari desa-desa ini kabarnya kerap disajikan untuk kalangan bangsawan keraton.",
      "Serat Centhini, manuskrip Jawa yang ditulis antara 1814 sampai 1823, bahkan mencatat nasi liwet sebagai sajian yang dihidangkan saat gempa bumi melanda tanah Jawa, semacam ritual syukur dan penolak bala. Sebagian catatan juga menautkannya dengan nasi samin kegemaran Nabi Muhammad, yang diadaptasi warga lokal menyesuaikan bahan yang tersedia di tanah Jawa.",
      "Warga Menuran mulai memperkenalkan nasi liwet ke tengah Kota Surakarta pada tahun 1934, dan sejak era Sri Susuhunan Pakubuwono IX (memerintah 1861 sampai 1893) hidangan ini sudah akrab di lingkungan Keraton Kasunanan. Warga Duwet meneruskan tradisi yang sama: menanak nasi bersantan sejak dini hari, membungkusnya di atas pincuk daun pisang, lalu menjajakannya ke seluruh penjuru Surakarta setiap pagi.",
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
      { year: "1814 s.d. 1823", label: "Dicatat dalam Serat Centhini sebagai sajian syukur & penolak bala saat gempa." },
      { year: "1861 s.d. 1893", label: "Populer di lingkungan Keraton Kasunanan Surakarta pada era Sri Susuhunan Pakubuwono IX." },
      { year: "1934", label: "Warga Menuran & Duwet mulai menjual langsung ke Kota Surakarta." },
      { year: "Des 2012", label: "Dinobatkan sebagai satu dari 30 ikon kuliner tradisional Nusantara." },
      { year: "19 Jun 2022", label: "Ditetapkan ikon kuliner Kota Surakarta oleh Forum Budaya Mataram, dibagikan 1.000 porsi saat Solo Car Free Day." },
      { year: "2023", label: "Resmi jadi Warisan Budaya Takbenda Indonesia, satu dari 16 budaya Jawa Tengah yang ditetapkan tahun itu." },
    ] as TimelineEntry[],
    closing:
      "Sepuluh kali kepala desa berganti, dua kelurahan lama sudah menyatu jadi satu nama, namun kukusan nasi liwet di dapur-dapur Duwet tidak pernah berhenti mengepul.",
  },
};
