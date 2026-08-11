/**
 * site.ts
 * ---------------------------------------------------------------------------
 * Site-wide constants: metadata, navigation, footer/contact facts.
 * Sourced from the village's official portals and Wikipedia (see README-DATA
 * notes in heritage.ts for the full citation list).
 */

export const siteMeta = {
  title: "Desa Duwet: Dapur Legenda Nusantara",
  description:
    "Desa Duwet, Kecamatan Baki, Kabupaten Sukoharjo, Jawa Tengah, adalah dapur asal Nasi Liwet yang menjadi Warisan Budaya Takbenda Indonesia. Jelajahi sejarah, ekonomi warga, wisata sawah, budaya, dan lokasi Desa Duwet.",
  locale: "id_ID",
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Sejarah", href: "#warisan" },
  { label: "Ekonomi", href: "#ekonomi" },
  { label: "Wisata", href: "#wisata" },
  { label: "Budaya", href: "#budaya" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

/** The 10 dukuh (hamlets) that make up present-day Desa Duwet. */
export const villageDukuh: string[] = [
  "Bulan",
  "Duwet",
  "Gondangsari",
  "Jombor",
  "Kalitengah",
  "Kembang",
  "Nolobayan",
  "Sanggrahan",
  "Slemben",
  "Tempel",
];

export const contactInfo = {
  officeName: "Kantor Desa Duwet",
  address: "Jl. Pemuda No. 1A, Jombor, Duwet, Kec. Baki, Kabupaten Sukoharjo, Jawa Tengah 57554",
  postalCode: "57556",
  district: "Kecamatan Baki",
  regency: "Kabupaten Sukoharjo",
  province: "Jawa Tengah",
  coordinates: { lat: -7.59333, lng: 110.76944 },
  officeHours: [
    { days: "Senin – Kamis", hours: "07.30 – 15.00 WIB" },
    { days: "Jumat", hours: "07.30 – 11.00 WIB" },
    { days: "Sabtu – Minggu", hours: "Tutup" },
  ],
};
