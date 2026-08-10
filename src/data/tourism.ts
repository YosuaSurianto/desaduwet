/**
 * tourism.ts — copy for the horizontal-scroll "Pariwisata & Edukasi" cards.
 */

export type TourismCard = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  features: string[];
  note: string;
  accent: "emerald" | "clay";
};

export const tourismCards: TourismCard[] = [
  {
    id: "sawah",
    index: "01",
    kicker: "Wisata Edukasi",
    title: "Wisata Edukasi Sawah",
    description:
      "Rasakan detak agraris otentik yang jadi jiwa desa ini: menyusuri pematang sawah yang asri, belajar menanam padi langsung dari petani setempat, dan menghirup udara pedesaan yang jauh dari hiruk-pikuk kota.",
    features: [
      "Trekking di pematang sawah",
      "Belajar menanam padi bersama petani",
      "Udara & pemandangan pedesaan murni",
      "Kunjungan rombongan sesuai perjanjian",
    ],
    note: "Kunjungan dilayani berdasarkan perjanjian — hubungi kantor desa untuk paket dan harga.",
    accent: "emerald",
  },
  {
    id: "waterpark",
    index: "02",
    kicker: "Rekreasi Keluarga",
    title: "Duwet Waterpark",
    description:
      "Ikon rekreasi air modern di Kecamatan Baki. Kolam yang segar jadi jeda sempurna setelah menyusuri sawah, dilengkapi fasilitas keluarga yang lengkap dan terawat rapi.",
    features: [
      "Tiket masuk mulai Rp 20.000",
      "Selasa–Jumat, pukul 10.00–17.00",
      "Sabtu–Minggu, pukul 08.00–17.00 · Senin tutup",
      "Parkir luas, musala, toilet bersih, gazebo & food court",
    ],
    note: "Buka Selasa–Minggu. Bisa dipadukan dengan Wisata Edukasi Sawah dalam satu hari kunjungan.",
    accent: "clay",
  },
];
