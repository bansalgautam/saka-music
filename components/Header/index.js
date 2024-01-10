"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { useDisclosure } from "@nextui-org/react";
import HeaderModal from "./HeaderModal";

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const selected = "text-[#ffd700]";
  return (
    <div className="bg-black w-full fixed top-0 z-10">
      <div className="grid lg:grid-cols-3 grid-cols-2 w-full max-w-[1440px] px-2 mx-auto text-white select-none items-center py-2">
        <h1 className="text-2xl font-bold text-[#ffd700]"><Link href="/">LOGO</Link></h1>
        <h1 className="font-extrabold text-[#ffd700] justify-self-center text-center hidden lg:block">
          SAKA MUSIC
        </h1>
        <div className="hidden lg:flex gap-8 justify-self-end">
          <div className={`text-md ${pathname === "/" && selected}`}>
            <Link href="/">Home</Link>
          </div>
          <div className={`text-md ${pathname === "/about" && selected}`}>
            <Link href="/about">About</Link>
          </div>
          <div className={`text-md ${pathname === "/contact" && selected}`}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="lg:hidden justify-self-end" onClick={onOpen}>
          <MenuIcon />
        </div>
      </div>
      <HeaderModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        pathname={pathname}
      />
    </div>
  );
}
