"use client";

import { useMenu } from "@/hooks/useMenu";
import { MenuOverlay } from "./MenuOverlay";
import { menuItems } from "./constants/menuItems";

export const MenuBurger = () => {
  const { isOpen, toggle } = useMenu();

  return (
    <>
      {/* Bouton burger */}
      <button
        onClick={toggle}
        className="fixed top-6 right-10 md:top-10 md:right-20 z-50 flex flex-col gap-2 p-2 hover:opacity-70 transition-opacity duration-200"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? (
          // Icône X quand le menu est ouvert
          <div className="relative w-7 h-7 md:w-8 md:h-8">
            <span className="absolute top-1/2 left-0 w-full h-1 bg-black block transform rotate-45 -translate-y-1/2"></span>
            <span className="absolute top-1/2 left-0 w-full h-1 bg-black block transform -rotate-45 -translate-y-1/2"></span>
          </div>
        ) : (
          // Icône burger quand le menu est fermé
          <>
            <span className="w-7 h-1 bg-black block md:w-8"></span>
            <span className="w-7 h-1 bg-black block md:w-8"></span>
            <span className="w-7 h-1 bg-black block md:w-8"></span>
          </>
        )}
      </button>

      {/* Menu overlay */}
      {isOpen && <MenuOverlay items={menuItems} onClose={toggle} />}
    </>
  );
};
