"use client";

export function AnaliseSection() {
  return (
    <section id="analise" className="scroll-mt-3 space-y-4">
      <div className="space-y-1">
        <h2 className="text-4xl font-semibold tracking-tight bg-linear-to-br from-orange-400 via-red-600 to-rose-800 bg-clip-text text-transparent">
          Entenda o caso do Banco Master
        </h2>
        <p className="text-base text-muted-foreground">
          Assista ao vídeo e entenda o escândalo que envolve o Banco Master, ministros do STF e o
          governo federal.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/1a6Byy41SDw"
            title="Entenda o caso do Banco Master"
          />
        </div>
      </div>
    </section>
  );
}
