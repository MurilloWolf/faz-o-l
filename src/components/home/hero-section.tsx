"use client";

import type { Notice } from "@/lib/data/notices";

type Props = {
  featuredNotice?: Notice;
  latestNotices: Notice[];
  formatDate: (value: string) => string;
};

export function HeroSection({ featuredNotice, latestNotices, formatDate }: Props) {
  return (
    <section id="destaque" className="scroll-mt-3 overflow-hidden rounded-2xl shadow-xl">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-stretch">
        {/* Hero with background image + overlay */}
        <article aria-label="Destaque principal" className="relative bg-[url('/assets/bg-hero.png')] bg-cover bg-center">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content on top of overlay */}
          <div className="relative z-10 space-y-4 p-5 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Ultimas notícias
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl bg-linear-to-r from-red-500 via-rose-400 to-red-700 bg-clip-text text-transparent">
              Entenda como o PT está destruindo o Brasil.
            </h1>

            {featuredNotice ? (
              <div className="max-w-2xl space-y-2">
                <p className="text-base text-white/80 md:text-lg">
                  <span className="font-semibold font-xl text-white">Notícia em destaque:</span>{" "}
                  <span className="text-white/90 font-lg">{featuredNotice.title}</span>
                </p>
                <p className="text-sm text-white/60">
                  {formatDate(featuredNotice.date)} · {featuredNotice.linkText}
                </p>
                <a
                  className="inline-flex rounded-md bg-red-600 px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  href={featuredNotice.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Abrir no {featuredNotice.linkText}
                </a>
              </div>
            ) : (
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                Sem notícias carregadas no momento.
              </p>
            )}
          </div>
        </article>

        <aside
          id="ultimas"
          className="scroll-mt-3 relative overflow-hidden p-4"
          style={{ backgroundColor: "#0f0205" }}
        >
          {/* Aurora blobs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="mesh-blob-1 absolute -left-16 -top-16 h-64 w-64 rounded-full bg-red-700/70 blur-3xl" />
            <div className="mesh-blob-2 absolute -bottom-16 -right-8 h-56 w-56 rounded-full bg-rose-500/60 blur-3xl" />
            <div className="mesh-blob-3 absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/80 blur-2xl" />
            <div className="mesh-blob-4 absolute -right-12 top-0 h-40 w-40 rounded-full bg-pink-800/50 blur-3xl" />
          </div>

          <p className="relative z-10 text-sm font-semibold text-white drop-shadow">
            Últimas agora
          </p>
          <div className="relative z-10 mt-3 space-y-3">
            {latestNotices.map((item, index) => (
              <article key={`${item.link}-${item.date}-${index}`}>
                <a
                  className="block rounded-lg bg-black/30 p-3 backdrop-blur-sm transition-colors hover:bg-black/50"
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <time className="text-xs text-white/60" dateTime={item.date}>{formatDate(item.date)}</time>
                  <h3 className="mt-1 text-sm font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/50">{item.linkText}</p>
                </a>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
