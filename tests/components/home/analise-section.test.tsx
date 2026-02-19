import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AnaliseSection } from "@/components/home/analise-section";

describe("AnaliseSection", () => {
  it("renders the section heading", () => {
    render(<AnaliseSection />);
    expect(
      screen.getByRole("heading", { name: /entenda o caso do banco master/i }),
    ).toBeInTheDocument();
  });

  it("renders the descriptive paragraph", () => {
    render(<AnaliseSection />);
    expect(screen.getByText(/escândalo que envolve o banco master/i)).toBeInTheDocument();
  });

  it("renders an iframe with the correct YouTube src", () => {
    const { container } = render(<AnaliseSection />);
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.src).toContain("youtube.com/embed/1a6Byy41SDw");
  });

  it("iframe has a descriptive title", () => {
    const { container } = render(<AnaliseSection />);
    const iframe = container.querySelector("iframe");
    expect(iframe?.title).toBe("Entenda o caso do Banco Master");
  });

  it("iframe has loading='lazy' for performance", () => {
    const { container } = render(<AnaliseSection />);
    const iframe = container.querySelector("iframe");
    // Use getAttribute because jsdom does not expose HTMLIFrameElement.loading as a property
    expect(iframe?.getAttribute("loading")).toBe("lazy");
  });

  it("has id='analise' for anchor navigation", () => {
    const { container } = render(<AnaliseSection />);
    expect(container.querySelector("#analise")).not.toBeNull();
  });
});
