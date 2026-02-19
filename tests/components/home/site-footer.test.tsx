import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/home/site-footer";

describe("SiteFooter", () => {
  it("renders the provided title", () => {
    render(<SiteFooter title="Faz o L News" />);
    expect(screen.getByText("Faz o L News")).toBeInTheDocument();
  });

  it("renders a <footer> landmark element", () => {
    render(<SiteFooter title="Faz o L News" />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("has id='rodape' for anchor navigation", () => {
    const { container } = render(<SiteFooter title="Faz o L News" />);
    expect(container.querySelector("#rodape")).not.toBeNull();
  });
});
