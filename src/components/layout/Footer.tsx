import { contactInfo } from "@/data";

import GlassPanel from "../ui/GlassPanel";

export default function Footer() {
  const mapsHref = `https://www.google.com/maps?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`;

  return (
    <footer id="kontak" className="relative z-10 px-gutter pb-10 pt-24 sm:pb-14">
      <GlassPanel dense className="mx-auto max-w-5xl p-6 sm:p-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-cream-50">Desa Duwet</p>
            <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
              {contactInfo.address}
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-300 underline-offset-4 hover:underline"
            >
              Lihat di peta ↗
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
              Jam Layanan Kantor Desa
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-cream-100/75">
              {contactInfo.officeHours.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{slot.days}</span>
                  <span className="text-cream-100/50">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/50">
              {contactInfo.district}, {contactInfo.regency}
            </p>
            <p className="mt-3 text-sm text-cream-100/75">
              Terdiri dari 10 dukuh yang menjaga satu warisan yang sama.
            </p>
          </div>
        </div>
      </GlassPanel>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-cream-100/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Pemerintah Desa Duwet, Kecamatan Baki, Sukoharjo.</p>
        <p>Dibuat oleh Yosua Surianto (Dracoo).</p>
      </div>
    </footer>
  );
}
