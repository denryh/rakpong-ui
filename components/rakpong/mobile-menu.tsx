"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useState } from "react";

const menuItems: (LinkProps & { children: React.ReactNode })[] = [
  {
    href: "/leaderboard",
    children: "Leaderboard",
  },
  {
    href: "/match-input",
    children: "Match Input",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="absolute top-4 left-4 rounded bg-neutral-100 p-1 md:hidden z-10">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="px-2">
        <SheetHeader className="border-b border-neutral-300 pb-1">
          <SheetTitle>RAKPONG 🏓</SheetTitle>
        </SheetHeader>

        <ul className="w-full mt-4 grid gap-2">
          {menuItems.map((item) => (
            <li key={item.href as string} onClick={() => setOpen(false)}>
              <Link
                className="px-8 py-2 rounded block hover:bg-black/50 hover:text-neutral-100 font-bold text-center"
                {...item}
              />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
