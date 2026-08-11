/**
 * tourism.ts — copy for the "Wisata" cards.
 *
 * Accuracy note: the old version of this file included "Duwet Waterpark" as
 * a village attraction. That waterpark is real, but it's in Nglorong,
 * Karangrejo, Kec. Kerjo, Kabupaten Karanganyar — a different regency
 * entirely, unrelated to Desa Duwet, Kec. Baki, Kab. Sukoharjo. It's dropped
 * here and replaced with a place that's actually verifiable in this village:
 * Sarapan Kopi, a rice-field-view café in Dukuh Gondangsari, listed in the
 * Kabupaten Sukoharjo tourism amenity directory (sisparnas.com) and widely
 * documented on social media.
 */

export type TourismCard = {
  id: string;
  icon: "sawah" | "kopi";
  kicker: string;
  title: string;
  description: string;
  features: string[];
  note: string;
  accent: "emerald" | "clay";
  mapQuery: string;
};

export const tourismCards: TourismCard[] = [
  {
    id: "sawah",
    icon: "sawah",
    kicker: "Wisata Edukasi",
    title: "Wisata Edukasi Sawah",
    description:
      "Susuri pematang sawah yang mengelilingi sepuluh dukuh Duwet, coba tanam padi bersama petani setempat, dan rasakan langsung denyut hidup agraris yang menghidupi dapur-dapur nasi liwet di desa ini.",
    features: [
      "Trekking di pematang sawah",
      "Belajar menanam padi bersama petani",
      "Udara & pemandangan pedesaan asli",
      "Kunjungan rombongan sesuai perjanjian",
    ],
    note:
      "Ini pengalaman informal langsung dari warga, belum berupa paket wisata resmi. Hubungi kantor desa dulu sebelum berkunjung.",
    accent: "emerald",
    mapQuery: "Duwet, Baki, Sukoharjo",
  },
  {
    id: "sarapan-kopi",
    icon: "kopi",
    kicker: "Kuliner & Wisata",
    title: "Sarapan Kopi, Ngopi di Tengah Sawah",
    description:
      "Coffee shop dengan gazebo-gazebo menghadap hamparan sawah hijau di Dukuh Gondangsari, jadi tempat singgah favorit warga Solo Raya untuk sarapan, ngopi, sampai makan besar sambil menikmati angin sawah.",
    features: [
      "Buka tiap hari, sekitar pukul 08.00 sampai 23.00",
      "Menu masakan Jawa & aneka kopi",
      "Gazebo luas, cocok untuk rombongan keluarga",
      "Sekitar 3 km / 15 menit dari pusat Kota Solo",
    ],
    note:
      "Dikelola warga secara mandiri, bukan fasilitas milik pemerintah desa. Sebaiknya konfirmasi jam buka sebelum datang.",
    accent: "clay",
    mapQuery: "Sarapan Kopi, Baki, Sukoharjo",
  },
];
