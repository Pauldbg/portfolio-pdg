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
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
      }}
      onClick={onClose}
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
                className="text-black text-4xl md:text-6xl font-bold tracking-tight hover:text-gray-700 border-b-4 border-black pb-2 inline-block transition-colors"
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
