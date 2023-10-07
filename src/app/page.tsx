"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { getAllCharacters } from "../../lib/characters";
import { VtmnButton } from "@vtmn/react";

export default async function Home() {
  const data = await getAllCharacters();

  return (
    <main className={styles.main}>
      {data?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <VtmnButton onClick={() => getAllCharacters()}>Refresh data</VtmnButton>
    </main>
  );
}
