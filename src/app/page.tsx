"use client";

import { Hero } from "@/components/Hero";
import { getAllCharacters } from "../../lib/characters";
import { VtmnButton } from "@vtmn/react";
import { Info } from "@/components/InfoSection";
import { ProjectMain } from "@/components/ProjectMain";
import { ProfilesMain } from "@/components/ProfilesMain";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <ProjectMain />
      <ProfilesMain />
    </main>
  );
}
