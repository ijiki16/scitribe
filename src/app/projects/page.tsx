"use client";
import { VtmnButton, VtmnSearch } from "@vtmn/react";

export default function Projects() {
  return (
    <main>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 34, margin: 40 }}
      >
        <div>
          <VtmnSearch
            onClear={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            placeholder="Search"
            showSearchButton
            size="medium"
            variant="default"
          />
          <div>
            <div>Filed of Since</div>
          </div>
        </div>
        <div>Projects</div>
      </div>
    </main>
  );
}
