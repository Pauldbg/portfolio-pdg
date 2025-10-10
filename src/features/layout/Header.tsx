import Image from "next/image";
import Link from "next/link";
import { MenuBurger } from "@/features/navigation/MenuBurger";

export const Header = () => {
  return (
    <>
      {/* Logo fixé en haut à gauche - Responsive */}
      <Link
        href="/"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 block hover:opacity-80 transition-opacity duration-200"
      >
        <Image
          src="/images/logo-header.svg"
          alt="Paul Dubois Gance"
          width={100}
          height={60}
          priority
          className="w-16 h-auto md:w-[100px]"
        />
      </Link>

      {/* Menu burger en haut à droite */}
      <MenuBurger />
    </>
  );
};
