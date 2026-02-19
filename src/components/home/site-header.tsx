"use client";

import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export type NavItem = {
  label: string;
  id: string;
};

type Props = {
  title: string;
  items: readonly NavItem[];
  isMenuOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onNavClick: (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  onDrawerItemClick: (sectionId: string) => void;
  menuIcon: React.ReactNode;
};

export function SiteHeader({
  title,
  items,
  isMenuOpen,
  onOpenChange,
  onNavClick,
  onDrawerItemClick,
  menuIcon,
}: Props) {
  return (
    <header className="w-full bg-linear-to-r from-black via-zinc-900 to-red-950 shadow-sm">
      <div className="mx-auto w-full max-w-6xl px-0 py-3 sm:px-6 lg:px-8">
        <nav
          aria-label="Navegação principal"
          className="bg-transparent px-4 py-3 text-white shadow-sm sm:rounded-xl"
        >
          <div className="flex items-center justify-between gap-3">
            <div
              className="flex flex-row leading-tight tracking-wide items-center"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              <div>
                <Image src={logo} alt={title} width={40} height={40} />
              </div>
              <div className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-white">Faz o L</span>
                <span className="text-sm font-semibold text-red-500">Filho da puta</span>
              </div>
            </div>

            <ul className="hidden items-center gap-4 text-sm text-white/80 md:flex">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="transition-colors hover:text-white"
                    onClick={(event) => onNavClick(event, item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Sheet open={isMenuOpen} onOpenChange={onOpenChange}>
              <SheetTrigger asChild>
                <Button
                  aria-label="Abrir menu"
                  className="text-white hover:bg-white/10 hover:text-white md:hidden"
                  size="icon"
                  variant="ghost"
                >
                  {menuIcon}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[82%] sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Navegação</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-4 pt-0">
                  {items.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <button
                        className="rounded-md bg-muted px-4 py-3 text-left text-sm font-medium"
                        onClick={() => onDrawerItemClick(item.id)}
                        type="button"
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
