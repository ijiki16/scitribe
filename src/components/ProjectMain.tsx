import { VtmnButton, VtmnCard } from "@vtmn/react";
import Image from "next/image";
import Link from "next/link";

export const ProjectMain = () => {
  return (
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
        <Link href="/">View all</Link>
      </div>
      <div style={{ display: "flex", gap: "35px" }}>
        <div style={{ flex: "1 1 0px" }}>
          <VtmnCard
            title=""
            img={
              <Image
                src="/projects1.png"
                alt="projects1"
                width={268}
                height={218}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            }
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "10px",
                width: "300px",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                msTextOverflow: "ellipsis",
              }}
            >
              Project Name
            </span>
            <div>
              A container for content representing a single entity. e.g. a
              contact, article, or task.
            </div>
          </VtmnCard>
        </div>
        <div style={{ flex: "1 1 0px" }}>
          <VtmnCard
            title=""
            img={
              <Image
                src="/projects2.png"
                alt="projects2"
                width={268}
                height={218}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            }
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "10px",
                width: "300px",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                msTextOverflow: "ellipsis",
              }}
            >
              Make a Moonquake Map 2.0!
            </span>
            <div>
              A container for content representing a single entity. e.g. a
              contact, article, or task.
            </div>
          </VtmnCard>
        </div>

        <div style={{ flex: "1 1 0px" }}>
          <VtmnCard
            title=""
            img={
              <Image
                src="/projects3.png"
                alt="projects3"
                width={268}
                height={218}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            }
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "10px",
                width: "300px",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                msTextOverflow: "ellipsis",
              }}
            >
              Project Name
            </span>
            <div>
              A container for content representing a single entity. e.g. a
              contact, article, or task.
            </div>
          </VtmnCard>
        </div>

        <div style={{ flex: "1 1 0px" }}>
          <VtmnCard
            title=""
            img={
              <Image
                src="/projects4.png"
                alt="projects4"
                width={268}
                height={218}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            }
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "10px",
                width: "300px",
                display: "block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                msTextOverflow: "ellipsis",
              }}
            >
              Mapping Data for Societal Benefit
            </span>
            <div>
              A container for content representing a single entity. e.g. a
              contact, article, or task.
            </div>
          </VtmnCard>
        </div>
      </div>
    </div>
  );
};
