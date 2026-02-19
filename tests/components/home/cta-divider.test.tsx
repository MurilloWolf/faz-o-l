import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { CtaDivider } from "@/components/home/cta-divider";

describe("CtaDivider", () => {
  it("renders the CTA button", () => {
    render(<CtaDivider onClick={vi.fn()} />);
    expect(screen.getByRole("button", { name: /ver todas as notícias/i })).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", async () => {
    const onClick = vi.fn();
    render(<CtaDivider onClick={onClick} />);
    await userEvent.click(screen.getByRole("button", { name: /ver todas as notícias/i }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders two decorative dividers", () => {
    const { container } = render(<CtaDivider onClick={vi.fn()} />);
    // the two hr-like divs have class h-px
    const dividers = container.querySelectorAll(".h-px");
    expect(dividers.length).toBe(2);
  });
});
