"use client";

import { useMemo, useState } from "react";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import type { Notice } from "@/lib/data/notices";

const PAGE_SIZE = 10;

type Props = {
  notices: Notice[];
  formatDate: (value: string) => string;
};

function parseToTimestamp(date: string): number {
  const mdY = date.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (mdY) return new Date(`${mdY[3]}-${mdY[1]}-${mdY[2]}`).getTime();
  const yMd = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (yMd) return new Date(date).getTime();
  return 0;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function AllNoticesSection({ notices, formatDate }: Props) {
  const today = useMemo(() => todayISO(), []);
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState(() => todayISO());
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const from = dateFrom ? new Date(dateFrom).getTime() : null;
    const to = dateTo ? new Date(dateTo + "T23:59:59").getTime() : null;

    return notices.filter((n) => {
      if (q && !n.title.toLowerCase().includes(q) && !n.linkText.toLowerCase().includes(q))
        return false;
      const ts = parseToTimestamp(n.date);
      if (from && ts < from) return false;
      if (to && ts > to) return false;
      return true;
    });
  }, [notices, query, dateFrom, dateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const handleQuery = (v: string) => {
    setQuery(v);
    setPage(1);
  };
  const handleFrom = (v: string) => {
    setDateFrom(v);
    setPage(1);
  };
  const handleTo = (v: string) => {
    setDateTo(v);
    setPage(1);
  };

  return (
    <section id="todas" className="scroll-mt-3 space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Todas as notícias</h2>
        <p className="text-sm text-muted-foreground">Links organizados em uma lista única</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            aria-label="Buscar notícias por palavras-chave"
            className="w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            onChange={(e) => handleQuery(e.target.value)}
            placeholder="Buscar por palavras-chave..."
            role="searchbox"
            type="text"
            value={query}
          />
        </div>

        {/* Date from */}
        <label className="flex flex-col gap-1 sm:w-40">
          <span className="text-xs font-medium text-muted-foreground">De</span>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              aria-label="Filtrar notícias a partir desta data"
              className="w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              max={today}
              onChange={(e) => handleFrom(e.target.value)}
              type="date"
              value={dateFrom}
            />
          </div>
        </label>

        {/* Date to */}
        <label className="flex flex-col gap-1 sm:w-40">
          <span className="text-xs font-medium text-muted-foreground">Até</span>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              aria-label="Filtrar notícias até esta data"
              className="w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              max={today}
              onChange={(e) => handleTo(e.target.value)}
              type="date"
              value={dateTo}
            />
          </div>
        </label>
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "notícia encontrada" : "notícias encontradas"}
        {totalPages > 1 && ` · página ${safePage} de ${totalPages}`}
      </p>

      {/* List */}
      <div className="rounded-2xl bg-card p-4 shadow-sm">
        {paginated.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Nenhuma notícia encontrada.
          </p>
        ) : (
          <div className="space-y-3">
            {paginated.map((item, index) => (
              <article key={`${item.link}-${item.date}-${index}`}>
                <a
                  className="block rounded-lg bg-background/60 px-4 py-3 transition-colors hover:bg-muted/50"
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                    <time className="shrink-0 text-xs text-muted-foreground" dateTime={item.date}>
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{item.linkText}</p>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            aria-label="Página anterior"
            className="rounded-lg border bg-background p-2 transition-colors hover:bg-muted disabled:opacity-40"
            disabled={safePage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            type="button"
          >
            <ChevronLeft className="size-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
            .reduce<(number | "...")[]>((acc, p, i, arr) => {
              if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
              acc.push(p);
              return acc;
            }, [])
            .map((p, i) =>
              p === "..." ? (
                <span key={`ellipsis-${i}`} className="px-1 text-sm text-muted-foreground">
                  …
                </span>
              ) : (
                <button
                  key={p}
                  aria-label={`Página ${p}`}
                  className={`min-w-8 rounded-lg border px-3 py-1.5 text-sm transition-colors ${p === safePage ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"}`}
                  onClick={() => setPage(p as number)}
                  type="button"
                >
                  {p}
                </button>
              ),
            )}

          <button
            aria-label="Próxima página"
            className="rounded-lg border bg-background p-2 transition-colors hover:bg-muted disabled:opacity-40"
            disabled={safePage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            type="button"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </section>
  );
}
