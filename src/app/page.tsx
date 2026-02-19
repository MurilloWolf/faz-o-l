"use client";

import { Menu, Share2 } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";

import notices from "@/lib/data/notices";
import {
  AnaliseSection,
  AllNoticesSection,
  CtaDivider,
  EditoriasSection,
  HeroSection,
  NotificationBar,
  SiteFooter,
  SiteHeader,
  type NavItem,
} from "@/components/home";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const easeInCubic = (progress: number) => progress * progress * progress;

  const navItems: readonly NavItem[] = [
    { label: "Destaque", id: "destaque" },
    { label: "Editorias", id: "editorias" },
    { label: "Banco Master", id: "analise" },
    { label: "Análises", id: "analise" },
    { label: "Contato", id: "rodape" },
  ];

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 12;
    const distance = targetY - startY;
    const duration = Math.min(1400, 500 + Math.abs(distance) * 0.35);
    let animationStart: number | null = null;

    const step = (timestamp: number) => {
      if (animationStart === null) {
        animationStart = timestamp;
      }

      const elapsed = timestamp - animationStart;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInCubic(linearProgress);

      window.scrollTo({
        top: startY + distance * easedProgress,
      });

      if (linearProgress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const handleDrawerItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const formatDate = (value: string) => {
    const mdY = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (mdY) return `${mdY[2]}/${mdY[1]}/${mdY[3]}`;
    const yMd = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (yMd) return `${yMd[3]}/${yMd[2]}/${yMd[1]}`;
    return value;
  };

  const parseDate = (value: string) => {
    const mdY = value.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (mdY) return new Date(`${mdY[3]}-${mdY[1]}-${mdY[2]}`).getTime();
    const yMd = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (yMd) return new Date(value).getTime();
    return 0;
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: "Faz o L News", url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const [featuredNotice, ...restNotices] = notices;
  const latestNotices = [...notices]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);
  const spotlightNotices = restNotices.slice(3, 9);
  const feedNotices = restNotices.slice(7, 19);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsNotificationVisible(true);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-muted/70 via-background to-muted/40 text-foreground">
      <SiteHeader
        title="Faz o L News"
        items={navItems}
        isMenuOpen={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        onNavClick={handleNavClick}
        onDrawerItemClick={handleDrawerItemClick}
        menuIcon={<Menu />}
      />

      <NotificationBar
        visible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
      >
        <button
          className="flex cursor-pointer items-center gap-1.5 hover:underline"
          onClick={handleShare}
          type="button"
        >
          Envie esse site para seus amigos e ajude a salvar o Brasil!
          <Share2 className="size-3.5 shrink-0" />
        </button>
      </NotificationBar>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-4 sm:px-6 lg:gap-8 lg:px-8 lg:py-6">
        <HeroSection
          featuredNotice={featuredNotice}
          latestNotices={latestNotices}
          formatDate={formatDate}
        />

        <EditoriasSection spotlightNotices={spotlightNotices} formatDate={formatDate} />

        <CtaDivider onClick={() => scrollToSection("todas")} />

        <AnaliseSection />

        <AllNoticesSection notices={notices} formatDate={formatDate} />
      </div>

      <SiteFooter title="A voz do povo não é a voz de Deus. Deus fala através dos corajosos. E com eles construirá nosso país" />
    </main>
  );
}
