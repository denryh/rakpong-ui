import Search from "@/components/rakpong/search";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-4 relative">
      <Sheet>
        <SheetTrigger className="absolute top-4 left-4 rounded bg-neutral-100 p-1">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetHeader className="border-b border-neutral-300 pb-1">
            <SheetTitle>RAKPONG 🏓</SheetTitle>
          </SheetHeader>

          <ul className="w-full mt-4 grid gap-2">
            <li>
              <Link
                href="/leaderboard"
                className="px-8 py-2 rounded block hover:bg-black/50 hover:text-neutral-100 font-bold text-center"
              >
                Leaderboard
              </Link>
            </li>

            <li className="h-[1px] w-1/4 mx-auto bg-neutral-200"></li>

            <li>
              <Link
                href="/match-input"
                className="px-8 py-2 rounded block font-bold text-center"
              >
                Match Input
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      <span className="text-9xl absolute top-[18%]">🏓</span>

      <div className="w-full grid gap-4">
        <h1 className="text-3xl font-bold font-display text-center">RAKPONG</h1>

        <Search />

        <div className="flex gap-2 w-fit mx-auto items-center">
          <span>or</span>
          <Link href="/sign-in">
            <Button className="font-bold" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
