"use client";
import { GithubLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="col-span-12 rol-start-1 bg-[#121212] p-4 flex flex-col gap-2 items-center justify-center">
      <div className="text-gray-50 text-xs font-thin w-full text-center">
        <p>&copy; 2024 - 2026</p>
        <p>
          Este conteúdo é público e colaborativo. Sinta-se à vontade para
          contribuir.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 w-full">
        <Link href="https://github.com/MurilloWolf/faz-o-l" target="_blank">
          <GithubLogo
            size={36}
            className="text-gray-50 hover:text-gray-900 hover:bg-gray-50 p-1 cursor-pointer rounded-full transition-all duration-300"
          />
        </Link>
        <Link href="https://x.com/wolves_dev" target="_blank">
          <XLogo
            size={36}
            className="text-gray-50 hover:text-gray-900 hover:bg-gray-50 p-1 cursor-pointer rounded-full transition-all duration-300"
          />
        </Link>
        <Link href="https://www.instagram.com/wolves.dev/" target="_blank">
          <InstagramLogo
            size={36}
            className="text-gray-50 hover:text-gray-900 hover:bg-gray-50 p-1 cursor-pointer rounded-full transition-all duration-300"
          />
        </Link>
      </div>
    </footer>
  );
}
