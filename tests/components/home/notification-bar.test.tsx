import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { NotificationBar } from "@/components/home/notification-bar";

describe("NotificationBar", () => {
  it("renders nothing when visible=false", () => {
    const { container } = render(
      <NotificationBar visible={false} onClose={vi.fn()}>
        Mensagem
      </NotificationBar>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders children when visible=true", () => {
    render(
      <NotificationBar visible onClose={vi.fn()}>
        Envie para seus amigos!
      </NotificationBar>,
    );
    expect(screen.getByText("Envie para seus amigos!")).toBeInTheDocument();
  });

  it("has role='alert' for accessibility and SEO", () => {
    render(
      <NotificationBar visible onClose={vi.fn()}>
        Alerta
      </NotificationBar>,
    );
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders the close button with accessible label", () => {
    render(
      <NotificationBar visible onClose={vi.fn()}>
        Alerta
      </NotificationBar>,
    );
    expect(
      screen.getByRole("button", { name: /fechar notificação/i }),
    ).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const onClose = vi.fn();
    render(
      <NotificationBar visible onClose={onClose}>
        Alerta
      </NotificationBar>,
    );
    await userEvent.click(
      screen.getByRole("button", { name: /fechar notificação/i }),
    );
    expect(onClose).toHaveBeenCalledOnce();
  });
});
