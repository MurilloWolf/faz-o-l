import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

// Mock next/link and next/image so they work in jsdom without the Next.js runtime
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

import { SiteHeader, type NavItem } from "@/components/home/site-header";

const navItems: readonly NavItem[] = [
  { label: "Destaque", id: "destaque" },
  { label: "Editorias", id: "editorias" },
  { label: "Contato", id: "rodape" },
];

const defaultProps = {
  title: "Faz o L News",
  items: navItems,
  isMenuOpen: false,
  onOpenChange: vi.fn(),
  onNavClick: vi.fn(),
  onDrawerItemClick: vi.fn(),
  menuIcon: <span>☰</span>,
};

describe("SiteHeader", () => {
  it("renders the brand name", () => {
    render(<SiteHeader {...defaultProps} />);
    expect(screen.getByText("Faz o L")).toBeInTheDocument();
  });

  it("renders the logo image with accessible alt text", () => {
    render(<SiteHeader {...defaultProps} />);
    const logo = screen.getByAltText("Faz o L News");
    expect(logo).toBeInTheDocument();
  });

  it("renders all nav items as links (desktop nav)", () => {
    render(<SiteHeader {...defaultProps} />);
    for (const item of navItems) {
      expect(
        screen.getByRole("link", { name: item.label }),
      ).toBeInTheDocument();
    }
  });

  it("nav links point to the correct section anchors", () => {
    render(<SiteHeader {...defaultProps} />);
    for (const item of navItems) {
      expect(
        screen.getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", `#${item.id}`);
    }
  });

  it("nav has aria-label for accessibility and SEO", () => {
    render(<SiteHeader {...defaultProps} />);
    expect(
      screen.getByRole("navigation", { name: /navegação principal/i }),
    ).toBeInTheDocument();
  });

  it("renders mobile menu toggle button with accessible label", () => {
    render(<SiteHeader {...defaultProps} />);
    expect(
      screen.getByRole("button", { name: /abrir menu/i }),
    ).toBeInTheDocument();
  });

  it("renders a <header> landmark", () => {
    render(<SiteHeader {...defaultProps} />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("calls onNavClick when a nav link is clicked", async () => {
    const onNavClick = vi.fn();
    render(<SiteHeader {...defaultProps} onNavClick={onNavClick} />);
    await userEvent.click(screen.getByRole("link", { name: "Destaque" }));
    expect(onNavClick).toHaveBeenCalled();
  });
});
