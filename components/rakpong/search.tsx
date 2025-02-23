"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  useEffect(() => {
    console.log(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div className="flex gap-1">
      <Input
        placeholder="Search for a player"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button className="font-bold">Search</Button>
    </div>
  );
}
