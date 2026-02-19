"use client";

import { ListVideo } from "lucide-react";

type Props = {
  onClick: () => void;
};

export function CtaDivider({ onClick }: Props) {
  return (
    <section className="flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <button
        className="flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        onClick={onClick}
        type="button"
      >
        <ListVideo className="size-4" />
        Ver todas as notícias
      </button>
      <div className="h-px flex-1 bg-border" />
    </section>
  );
}
