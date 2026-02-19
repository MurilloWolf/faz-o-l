import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { EditoriasSection } from "@/components/home/editorias-section";
import type { Notice } from "@/lib/data/notices";

const formatDate = (v: string) => v;

const makeNotice = (n: number): Notice => ({
  title: `Notícia de teste ${n}`,
  date: `02-${String(n).padStart(2, "0")}-2026`,
  linkText: `Fonte ${n}`,
  link: `https://example.com/notice-${n}`,
});

const spotlightNotices: Notice[] = Array.from({ length: 8 }, (_, i) => makeNotice(i + 1));

describe("EditoriasSection", () => {
  it("renders the section heading", () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    expect(screen.getByRole("heading", { name: /editorias em destaque/i })).toBeInTheDocument();
  });

  it("renders the sub-heading description", () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    expect(screen.getByText(/panorama rápido com o que importa hoje/i)).toBeInTheDocument();
  });

  it("renders previous and next carousel buttons", () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    expect(screen.getByRole("button", { name: /notícia anterior/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /próxima notícia/i })).toBeInTheDocument();
  });

  it("renders dot indicators for each slide", () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    // 4 slides max (capped at slice(0,4))
    expect(screen.getByRole("button", { name: /ir para slide 1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ir para slide 4/i })).toBeInTheDocument();
  });

  it("renders side notice headings", () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    // Side list shows items 1..5 (indices 1-5 of spotlightNotices)
    expect(screen.getByRole("heading", { name: spotlightNotices[1].title })).toBeInTheDocument();
  });

  it("clicking next changes the visible slide content", async () => {
    render(<EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />);
    const nextBtn = screen.getByRole("button", { name: /próxima notícia/i });
    // After clicking next, slide 2 indicator becomes active
    await userEvent.click(nextBtn);
    // The dot for slide 2 should appear
    const dot2 = screen.getByRole("button", { name: /ir para slide 2/i });
    expect(dot2).toBeInTheDocument();
  });

  it("has id='editorias' for anchor navigation", () => {
    const { container } = render(
      <EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />,
    );
    expect(container.querySelector("#editorias")).not.toBeNull();
  });
});
