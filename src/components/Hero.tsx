import { VtmnButton } from "@vtmn/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <div
          style={{
            backgroundImage: "url('/stars.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "580px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              padding: "0 130px",
              width: "500px",
              boxSizing: "content-box",
            }}
          >
            <div
              style={{
                marginBottom: "32px",
                fontSize: "21px",
                fontWeight: "bold",
              }}
            >
              Marketplace for open science projects
            </div>

            <div style={{ fontSize: "18px", marginBottom: "40px" }}>
              Portal that helps people who are looking for open-source projects
              to work on and project creators who need skilled contributors to
              find each other and communicate.
            </div>

            <VtmnButton>Find out more</VtmnButton>
          </div>
        </div>
      </div>
    </div>
  );
};
