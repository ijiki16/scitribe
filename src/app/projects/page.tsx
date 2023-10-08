"use client";
import {
  VtmnList,
  VtmnListItem,
  VtmnSearch,
  VtmnCheckbox,
  VtmnButton,
  VtmnIcon,
} from "@vtmn/react";
import { FieldOfSince } from "../../../lib/types";
import { useState } from "react";

export default function Projects() {
  const [dropDown, setDropDown] = useState(false);
  const [fieldOfSince, setFieldOfSince] = useState([false]);

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
            <VtmnButton
              variant="ghost"
              onClick={() => setDropDown(!dropDown)}
              iconRight="arrow-down-line"
            >
              Filed of Since:
              <VtmnIcon size={24} value="arrow-down-line" variant="default" />
            </VtmnButton>

            {dropDown && (
              <VtmnList>
                {Object.keys(FieldOfSince).map((data, index) => (
                  <VtmnListItem id={data} key={index}>
                    <VtmnCheckbox
                      identifier="my-checkbox"
                      labelText={data}
                      onChange={function noRefCheck() {}}
                    />
                  </VtmnListItem>
                ))}
              </VtmnList>
            )}
          </div>
        </div>
        <div>Projects</div>
      </div>
    </main>
  );
}
