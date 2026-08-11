/**
 * location.ts — copy & map data for the "Lokasi" section.
 *
 * Accuracy note: only the village office coordinate is a verified pin (it
 * was already the sourced address/coordinate used in contactInfo, see
 * site.ts). Every other place below has no independently-verified GPS
 * coordinate, so `coordinates` is left `null` on purpose instead of a
 * guessed lat/lng — the map renders those as an approximate area marker,
 * and the "buka rute" link uses a text search query (resolved by Google
 * Maps itself) rather than a fabricated pin.
 */

export type MapPlace = {
  name: string;
  category: string;
  address: string;
  description: string;
  coordinates: { lat: number; lng: number } | null;
  mapQuery: string;
};

export const locationContent = {
  kicker: "Peta & Lokasi",
  title: "Ke Mana Kalau Berkunjung ke Duwet",
  intro:
    "Desa Duwet berada di Kecamatan Baki, sekitar 30 menit berkendara dari pusat Kota Solo. Titik-titik ini bisa jadi awal buat menyusun rute kunjungan sendiri.",

  mapCenter: { lat: -7.59333, lng: 110.76944 },

  places: [
    {
      name: "Kantor Desa Duwet",
      category: "Pemerintahan",
      address: "Jl. Pemuda No. 1A, Jombor, Duwet, Kec. Baki, Kabupaten Sukoharjo",
      description: "Titik mulai yang paling tepat: tanya jadwal kunjungan sawah atau info UMKM langsung di sini.",
      coordinates: { lat: -7.59333, lng: 110.76944 },
      mapQuery: "Kantor Desa Duwet, Baki, Sukoharjo",
    },
    {
      name: "Sarapan Kopi",
      category: "Kuliner & Wisata",
      address: "Gondangsari, Duwet, Kec. Baki, Kabupaten Sukoharjo (belakang Balepadi)",
      description: "Coffee shop dengan gazebo menghadap sawah, dikelola warga secara mandiri.",
      coordinates: null,
      mapQuery: "Sarapan Kopi, Baki, Sukoharjo",
    },
    {
      name: "Hamparan Sawah Duwet",
      category: "Wisata Edukasi",
      address: "Menyebar di sekitar sepuluh dukuh Duwet",
      description: "Kunjungan sawah dilayani secara informal, sebaiknya konfirmasi dulu lewat kantor desa.",
      coordinates: null,
      mapQuery: "Duwet, Baki, Sukoharjo",
    },
  ] as MapPlace[],
};
