'use client';

export const MenuBurger = () => {
  const handleClick = () => {
    // TODO: Ouvrir le menu overlay
    console.log('Menu burger cliqué');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 right-10 md:top-10 md:right-20 z-50 flex flex-col gap-2 p-2 hover:opacity-70 transition-opacity duration-200"
      aria-label="Menu"
    >
      <span className="w-7 h-1 bg-black block md:w-8"></span>
      <span className="w-7 h-1 bg-black block md:w-8"></span>
      <span className="w-7 h-1 bg-black block md:w-8"></span>
    </button>
  );
};
