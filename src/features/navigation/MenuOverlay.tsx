"use client";

import Link from "next/link";
import { MenuItem } from "@/types/navigation/MenuItem";

type MenuOverlayProps = {
  items: MenuItem[];
  onClose: () => void;
};

export const MenuOverlay = ({ items, onClose }: MenuOverlayProps) => {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      onClick={onClose}
      style={{
        mixBlendMode: "difference",
      }}
    >
      <nav
        className="w-full max-w-md mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col space-y-8 md:space-y-12 p-10">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                onClick={onClose}
                className="text-white text-3xl md:text-4xl font-bold tracking-tight border-b-4 border-white pb-2 inline-block transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
