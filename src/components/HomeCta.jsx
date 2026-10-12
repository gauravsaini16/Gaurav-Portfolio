import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="relative z-20 px-3 pb-24 pt-8 md:px-6 md:pb-32 md:pt-12">
      <div className="relative mx-auto flex min-h-[500px] max-w-[1600px] items-center overflow-hidden rounded-[2rem] border border-white/10 bg-black/5 px-7 py-16 md:min-h-[560px] md:px-20 lg:px-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5" />

        <div className="relative z-10 max-w-6xl">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.55em] text-[#ff6b1a]">
            Next Phase
          </p>

          <h2 className="max-w-6xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Ready to build something great?
          </h2>

          <p className="mt-8 max-w-2xl text-sm font-light leading-7 text-white/45 md:text-lg md:leading-8">
            Let&apos;s discuss your goals and build a clear, scalable web solution designed for performance and real-world use.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#ff6b1a] px-9 text-[11px] font-black uppercase tracking-[0.25em] text-black transition-colors hover:bg-white"
            >
              Start a Project
              <span aria-hidden="true" className="text-lg">→</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/15 bg-black/10 px-9 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-white/35 hover:bg-white/5 hover:text-white"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
