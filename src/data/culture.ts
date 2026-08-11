/**
 * culture.ts — copy for the "Budaya" section.
 *
 * Sumber: situs resmi Pemerintah Desa Duwet (duwet-sukoharjo.desa.id) untuk
 * kesenian & prestasi warga; heritage.ts untuk tradisi Bersih Desa yang
 * sudah sempat disebut di riset sejarah sebelumnya.
 */

export type Tradition = {
  title: string;
  body: string;
};

export const cultureContent = {
  kicker: "Budaya Duwet",
  title: "Tradisi yang Masih Hidup di Duwet",
  intro:
    "Selain nasi liwet, ada kesenian dan pencapaian lain yang jadi identitas Duwet, dari panggung rakyat sampai kesadaran hidup sehat warganya.",

  traditions: [
    {
      title: "Gejug Lesung",
      body:
        "Kesenian menabuh lesung, alat tumbuk padi tradisional, hingga menghasilkan irama. Masih ditampilkan warga Duwet dalam acara-acara desa.",
    },
    {
      title: "Wayang Kulit Dalang Kecil",
      body:
        "Pertunjukan wayang kulit yang dibawakan dalang cilik, cara desa merawat kesenian tradisional sejak usia dini.",
    },
    {
      title: "Bersih Desa",
      body:
        "Ritual gotong royong dan syukuran warga yang masih lestari setiap tahun, warisan budaya hidup yang menjaga kekompakan sosial warga Duwet.",
    },
  ] as Tradition[],

  achievement: {
    title: "Desa Siaga ber-PHBS",
    body:
      "Desa Duwet pernah menyandang predikat Desa Siaga ber-PHBS (Perilaku Hidup Bersih dan Sehat) rangking pertama se-Kabupaten Sukoharjo, capaian yang lahir dari kesadaran warga menjaga kesehatan lingkungan bersama.",
  },
};
