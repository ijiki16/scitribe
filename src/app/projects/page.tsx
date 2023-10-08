"use client";
import {
  VtmnList,
  VtmnListItem,
  VtmnSearch,
  VtmnCheckbox,
  VtmnButton,
  VtmnIcon,
  VtmnCard,
} from "@vtmn/react";
import { FieldOfSince } from "../../../lib/types";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [dropDown, setDropDown] = useState(false);
  const [fieldOfSince, setFieldOfSince] = useState([]);
  const [projectList, setProjectList] = useState([]);

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

        <div style={{ padding: "0 60px", marginBottom: "120px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>Pojects</div>
          </div>
          <div style={{ display: "flex", gap: "35px" }}>
            <div style={{ flex: "1 1 0px" }}>
              <VtmnCard
                title="Project Name"
                img={
                  <Image
                    src="/projects1.png"
                    alt="projects1"
                    width={268}
                    height={218}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div>
                  A container for content representing a single entity. e.g. a
                  contact, article, or task.
                </div>
              </VtmnCard>
            </div>
            <div style={{ flex: "1 1 0px" }}>
              <VtmnCard
                title="Make a Moonquake Map 2.0!"
                img={
                  <Image
                    src="/projects2.png"
                    alt="projects2"
                    width={268}
                    height={218}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div>
                  A container for content representing a single entity. e.g. a
                  contact, article, or task.
                </div>
              </VtmnCard>
            </div>

            <div style={{ flex: "1 1 0px" }}>
              <VtmnCard
                title="Project Name"
                img={
                  <Image
                    src="/projects3.png"
                    alt="projects3"
                    width={268}
                    height={218}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div>
                  A container for content representing a single entity. e.g. a
                  contact, article, or task.
                </div>
              </VtmnCard>
            </div>

            <div style={{ flex: "1 1 0px" }}>
              <VtmnCard
                title="Mapping Data for Societal Benefit"
                img={
                  <Image
                    src="/projects4.png"
                    alt="projects4"
                    width={268}
                    height={218}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div>
                  A container for content representing a single entity. e.g. a
                  contact, article, or task.
                </div>
              </VtmnCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
