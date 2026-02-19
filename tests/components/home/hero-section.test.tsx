import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "@/components/home/hero-section";
import type { Notice } from "@/lib/data/notices";

const formatDate = (v: string) => v;

const featured: Notice = {
  title: "Toffoli se afasta do caso Master",
  date: "02-12-2026",
  linkText: "Reuters",
  link: "https://example.com/toffoli",
};

const latestNotices: Notice[] = [
  {
    title: "Escândalo do Banco Master",
    date: "02-14-2026",
    linkText: "CNN Brasil",
    link: "https://example.com/master",
  },
  {
    title: "STF analisa caso",
    date: "02-13-2026",
    linkText: "G1",
    link: "https://example.com/stf",
  },
];

describe("HeroSection", () => {
  it("renders the main h1 heading", () => {
    render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the featured notice title when provided", () => {
    render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    expect(screen.getByText(featured.title)).toBeInTheDocument();
  });

  it("renders a link to the featured notice source", () => {
    render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    expect(
      screen.getByRole("link", { name: /abrir no Reuters/i }),
    ).toHaveAttribute("href", featured.link);
  });

  it("renders fallback text when no featuredNotice is provided", () => {
    render(
      <HeroSection
        featuredNotice={undefined}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    expect(
      screen.getByText(/sem notícias carregadas no momento/i),
    ).toBeInTheDocument();
  });

  it("renders latest notices with h3 titles", () => {
    render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    for (const notice of latestNotices) {
      expect(
        screen.getByRole("heading", { level: 3, name: notice.title }),
      ).toBeInTheDocument();
    }
  });

  it("renders <time> elements for latest notice dates", () => {
    const { container } = render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    const timeEls = container.querySelectorAll("time");
    expect(timeEls.length).toBeGreaterThanOrEqual(latestNotices.length);
  });

  it("latest notices render as external links with rel=noreferrer", () => {
    render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    // The link's accessible name includes date + title + source text, so query by href
    const link = document.querySelector<HTMLAnchorElement>(
      `a[href="${latestNotices[0].link}"]`,
    );
    expect(link).not.toBeNull();
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("has id='destaque' for anchor navigation", () => {
    const { container } = render(
      <HeroSection
        featuredNotice={featured}
        latestNotices={latestNotices}
        formatDate={formatDate}
      />,
    );
    expect(container.querySelector("#destaque")).not.toBeNull();
  });
});
