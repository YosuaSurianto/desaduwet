/**
 * hero.ts — copy for the opening viewport.
 */

export type HeroStat = {
  value: string;
  label: string;
};

export const heroContent = {
  kicker: "Kecamatan Baki · Kabupaten Sukoharjo · Jawa Tengah",
  titleLines: ["Dapur Legenda", "Nusantara"],
  villageName: "Desa Duwet",
  subtitle:
    "Sejak era Mataram Islam, aroma nasi liwet dari dapur-dapur Desa Duwet telah mengharumkan tanah Sukoharjo — kini berdiri sebagai Warisan Budaya Takbenda Indonesia.",
  scrollCue: "Gulir untuk memulai perjalanan",
  stats: [
    { value: "1940", label: "Dua kelurahan bersatu menjadi Desa Duwet" },
    { value: "±440", label: "Tahun tradisi nasi liwet, sejak Mataram Islam" },
    { value: "2023", label: "Ditetapkan Warisan Budaya Takbenda Indonesia" },
    { value: "10", label: "Dukuh yang hidup dalam satu desa" },
  ] as HeroStat[],
};
