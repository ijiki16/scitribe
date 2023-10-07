"use client";

import { Hero } from "@/components/Hero";
import { getAllCharacters } from "../../lib/characters";
import { VtmnButton } from "@vtmn/react";

export default function Home() {
  return (
    <main>
      {/* <VtmnButton onClick={() => getAllCharacters()}>Refresh data</VtmnButton> */}
      <Hero />
    </main>
  );
}
