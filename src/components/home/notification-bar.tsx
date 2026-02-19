"use client";

import { X } from "lucide-react";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function NotificationBar({ visible, onClose, children }: Props) {
  if (!visible) return null;

  return (
    <aside aria-label="Barra de notificação" role="alert" className="w-full bg-background py-3">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 rounded-lg bg-destructive/10 px-4 py-2 text-sm font-semibold text-destructive shadow-sm">
          <div className="text-center sm:text-left">{children}</div>
          <button
            aria-label="Fechar notificação"
            className="rounded-md p-1 transition-colors hover:bg-destructive/20"
            onClick={onClose}
            type="button"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
