import { MenuItem } from "@/types/navigation/MenuItem";

export const menuItems: MenuItem[] = [
  { id: 0, label: "HOME", link: "/" },
  { id: 1, label: "ABOUT", link: "/about" },
  {
    id: 2,
    label: "CONTACT",
    link: "mailto:paul.duboisgance@gmail.com",
    isExternal: true,
  },
];
