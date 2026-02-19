import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { AllNoticesSection } from "@/components/home/all-notices-section";
import type { Notice } from "@/lib/data/notices";

const formatDate = (v: string) => v;

/** Create an array of N unique Notice objects */
const makeNotices = (n: number): Notice[] =>
  Array.from({ length: n }, (_, i) => ({
    title: `Notícia ${i + 1}`,
    date: `2026-01-${String(i + 1).padStart(2, "0")}`,
    linkText: `Fonte ${i + 1}`,
    link: `https://example.com/notice-${i + 1}`,
  }));

describe("AllNoticesSection", () => {
  it("renders the section heading", () => {
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    expect(
      screen.getByRole("heading", { name: /todas as notícias/i }),
    ).toBeInTheDocument();
  });

  it("renders the result count text", () => {
    render(<AllNoticesSection notices={makeNotices(5)} formatDate={formatDate} />);
    expect(screen.getByText(/5 notícias encontradas/i)).toBeInTheDocument();
  });

  it("renders notice titles as h3 headings", () => {
    const notices = makeNotices(3);
    render(<AllNoticesSection notices={notices} formatDate={formatDate} />);
    for (const notice of notices) {
      expect(
        screen.getByRole("heading", { name: notice.title }),
      ).toBeInTheDocument();
    }
  });

  it("renders notice links with target='_blank' and rel='noreferrer'", () => {
    const notices = makeNotices(2);
    render(<AllNoticesSection notices={notices} formatDate={formatDate} />);
    // The link's accessible name contains date + title + source, so query by href
    const link = document.querySelector<HTMLAnchorElement>(
      `a[href="${notices[0].link}"]`,
    );
    expect(link).not.toBeNull();
    expect(link).toHaveAttribute("href", notices[0].link);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("renders <time> elements with dateTime attribute", () => {
    const notices = makeNotices(2);
    const { container } = render(
      <AllNoticesSection notices={notices} formatDate={formatDate} />,
    );
    const timeEls = container.querySelectorAll("time");
    expect(timeEls.length).toBeGreaterThanOrEqual(notices.length);
    for (const el of Array.from(timeEls)) {
      expect(el.getAttribute("dateTime")).not.toBe("");
    }
  });

  it("has a search input with accessible role and label", () => {
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    expect(
      screen.getByRole("searchbox", { name: /buscar notícias/i }),
    ).toBeInTheDocument();
  });

  it("filters notices by search query", async () => {
    const notices: Notice[] = [
      { title: "Banco Master faliu", date: "2026-01-01", linkText: "G1", link: "https://g1.com/1" },
      { title: "Eleições previstas", date: "2026-01-02", linkText: "CNN", link: "https://cnn.com/1" },
    ];
    render(<AllNoticesSection notices={notices} formatDate={formatDate} />);
    const search = screen.getByRole("searchbox");
    await userEvent.type(search, "Master");
    expect(screen.getByRole("heading", { name: /banco master faliu/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /eleições previstas/i })).toBeNull();
  });

  it("shows 'Nenhuma notícia encontrada' when filter yields empty results", async () => {
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    const search = screen.getByRole("searchbox");
    await userEvent.type(search, "xyzzy-nao-existe");
    expect(screen.getByText(/nenhuma notícia encontrada/i)).toBeInTheDocument();
  });

  it("shows singular form for exactly one result", async () => {
    const notices: Notice[] = [
      { title: "Único resultado", date: "2026-01-01", linkText: "G1", link: "https://g1.com/u" },
      { title: "Outro resultado", date: "2026-01-02", linkText: "CNN", link: "https://cnn.com/u" },
    ];
    render(<AllNoticesSection notices={notices} formatDate={formatDate} />);
    const search = screen.getByRole("searchbox");
    await userEvent.type(search, "Único");
    expect(screen.getByText(/1 notícia encontrada/i)).toBeInTheDocument();
  });

  it("paginates when more than 10 notices are given", () => {
    render(
      <AllNoticesSection notices={makeNotices(15)} formatDate={formatDate} />,
    );
    // PAGE_SIZE = 10, so page nav should appear
    expect(
      screen.getByRole("button", { name: /próxima página/i }),
    ).toBeInTheDocument();
  });

  it("renders only PAGE_SIZE (10) items on the first page", () => {
    render(
      <AllNoticesSection notices={makeNotices(15)} formatDate={formatDate} />,
    );
    // h3 headings for notice titles — should be 10, not 15
    const headings = screen
      .getAllByRole("heading")
      .filter((h) => h.tagName === "H3");
    expect(headings.length).toBe(10);
  });

  it("navigates to next page when clicking next", async () => {
    render(
      <AllNoticesSection notices={makeNotices(15)} formatDate={formatDate} />,
    );
    await userEvent.click(
      screen.getByRole("button", { name: /próxima página/i }),
    );
    expect(screen.getByRole("heading", { name: "Notícia 11" })).toBeInTheDocument();
  });

  it("has id='todas' for anchor navigation", () => {
    const { container } = render(
      <AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />,
    );
    expect(container.querySelector("#todas")).not.toBeNull();
  });

  it("renders visible 'De' and 'Até' labels for the date fields", () => {
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    expect(screen.getByText("De")).toBeInTheDocument();
    expect(screen.getByText("Até")).toBeInTheDocument();
  });

  it("pre-fills the end date field with today's date", () => {
    const today = new Date().toISOString().slice(0, 10);
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    const dateToInput = screen.getByLabelText(/filtrar notícias até esta data/i);
    expect(dateToInput).toHaveValue(today);
  });

  it("sets max=today on the start date input to prevent future dates", () => {
    const today = new Date().toISOString().slice(0, 10);
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    const dateFromInput = screen.getByLabelText(/filtrar notícias a partir desta data/i);
    expect(dateFromInput).toHaveAttribute("max", today);
  });

  it("sets max=today on the end date input to prevent future dates", () => {
    const today = new Date().toISOString().slice(0, 10);
    render(<AllNoticesSection notices={makeNotices(3)} formatDate={formatDate} />);
    const dateToInput = screen.getByLabelText(/filtrar notícias até esta data/i);
    expect(dateToInput).toHaveAttribute("max", today);
  });
});
