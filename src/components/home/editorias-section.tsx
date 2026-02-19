"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Notice } from "@/lib/data/notices";

const SLIDE_GRADIENTS = [
  "from-red-900 via-red-800 to-rose-900",
  "from-slate-900 via-slate-800 to-zinc-900",
  "from-red-800 via-rose-900 to-red-950",
  "from-zinc-900 via-slate-800 to-zinc-950",
] as const;

type Props = {
  spotlightNotices: Notice[];
  formatDate: (value: string) => string;
};

export function EditoriasSection({ spotlightNotices, formatDate }: Props) {
  const slides = spotlightNotices.slice(0, 4);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section id="editorias" className="scroll-mt-3 space-y-5 lg:space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-semibold tracking-tight">Editorias em destaque</h2>
        <h3 className="text-lg text-muted-foreground">Panorama rápido com o que importa hoje</h3>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Carousel */}
        <article
          aria-label="Carrossel de editorias"
          className="relative flex flex-col overflow-hidden rounded-2xl shadow-lg"
        >
          {/* Image / gradient area */}
          <div
            className={`relative flex min-h-80 flex-1 items-center justify-center overflow-hidden transition-all duration-500 ${slide?.image ? "bg-black" : `bg-linear-to-br ${SLIDE_GRADIENTS[current]}`}`}
          >
            {/* Background image or decorative pattern */}
            {slide?.image ? (
              <img
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500"
                src={slide.image}
              />
            ) : (
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_0,transparent_50%)] bg-size-[12px_12px]" />
            )}

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Prev / Next buttons */}
            <button
              aria-label="Notícia anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              onClick={prev}
              type="button"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Próxima notícia"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              onClick={next}
              type="button"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`size-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                  onClick={() => setCurrent(i)}
                  type="button"
                />
              ))}
            </div>
          </div>

          {/* Text below image */}
          {slide && (
            <a
              className="block bg-foreground px-5 py-4 text-background transition-opacity hover:opacity-90"
              href={slide.link}
              rel="noreferrer"
              target="_blank"
            >
              <p className="text-xs text-background/60">
                <time dateTime={slide.date}>{formatDate(slide.date)}</time> · {slide.linkText}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug">{slide.title}</h3>
            </a>
          )}
        </article>

        {/* Side notices */}
        <div className="flex flex-col gap-3" role="list">
          {spotlightNotices.slice(1, 6).map((item, index) => (
            <article key={`${item.link}-${item.date}-${index}`} role="listitem">
              <a
                className="block rounded-2xl bg-card p-3 shadow-sm transition-colors hover:bg-muted/40"
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                <h3 className="text-sm font-semibold leading-snug text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  <time dateTime={item.date}>{formatDate(item.date)}</time> · {item.linkText}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
