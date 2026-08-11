import RevealOnScroll from "../ui/RevealOnScroll";
import TextReveal from "../ui/TextReveal";

export default function CtaSection() {
  return (
    <section className="relative z-10 flex flex-col items-center px-gutter py-24 text-center sm:py-32">
      <TextReveal
        as="h2"
        text="Datang, Rasakan, Bawa Pulang Ceritanya"
        className="max-w-3xl font-display text-3xl leading-[1.05] text-cream-50 sm:text-6xl"
        wordClassName="shimmer-text"
      />

      <RevealOnScroll delay={0.2} className="mt-6 max-w-xl">
        <p className="text-base leading-relaxed text-cream-100/75 sm:text-lg">
          Dari kukusan nasi liwet dini hari hingga angin sawah di Sarapan Kopi, Desa Duwet menanti untuk dijelajahi, bukan sekadar dibaca.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.35} className="mt-9">
        <a
          href="#kontak"
          className="glass-hover inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-gold-200 sm:text-base"
        >
          Rencanakan Kunjungan
        </a>
      </RevealOnScroll>
    </section>
  );
}
