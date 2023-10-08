"use client";

import { Hero } from "@/components/Hero";
import { getAllCharacters } from "../../lib/characters";
import { VtmnButton } from "@vtmn/react";
import { Info } from "@/components/InfoSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
    </main>
  );
}
