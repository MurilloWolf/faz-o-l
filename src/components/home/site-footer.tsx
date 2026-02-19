"use client";

type Props = {
  title: string;
};

export function SiteFooter({ title }: Props) {
  return (
    <footer id="rodape" className="w-full bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-foreground p-6">
          <p className="text-base text-center font-medium">{title}</p>
          <div className="mt-8 h-px w-full bg-background/30" />
        </div>
      </div>
    </footer>
  );
}
