"use client";
import { VtmnButton, VtmnSearch } from "@vtmn/react";

export default function Projects() {
  return (
    <main>
      <>
        <VtmnButton>Refresh</VtmnButton>
        <VtmnSearch
          onClear={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          placeholder="Search"
          showSearchButton
          size="medium"
          variant="default"
        />
      </>
    </main>
  );
}
