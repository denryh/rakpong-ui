import Search from "@/components/rakpong/search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-4 relative">
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
