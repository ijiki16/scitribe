import { VtmnButton, VtmnCard } from "@vtmn/react";
import Image from "next/image";

export const Info = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "120px 0",
      }}
    >
      <div style={{ width: "60px" }}></div>
      <div style={{ flex: "1 1 0px" }}>
        <VtmnCard title="">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "32px",
            }}
          >
            Marketplace for open science projects
          </div>
          <div
            style={{
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            Portal that helps people who are looking for open-source projects to
            work on and project creators who need skilled contributors to find
            each other and communicate:
          </div>
          <div style={{ fontSize: "18px", marginBottom: "24px" }}>
            <ul style={{ padding: "20px" }}>
              <li>NASA</li>
              <li>National Oceanic and Atmospheric Administration (NOAA)</li>
              <li>United States Geological Survey (USGS)</li>
              <li>National Institutes of Health (NIH)</li>
              <li>United States Department of Agriculture (USDA)</li>
              <li>Environmental Protection Agency (EPA)</li>
              <li>and more…</li>
            </ul>
          </div>
          <VtmnButton>Find out more</VtmnButton>

          <div style={{ height: "24px" }}></div>
        </VtmnCard>
      </div>

      <div style={{ width: "32px" }}></div>
      <div style={{ flex: "1 1 0px" }}>
        <VtmnCard title="">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/VzO2HBjLkww?si=tSvNRgNQwfaZs7FQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            A Marketplace for Open Science Projects
          </div>
          <div>
            <img
              src="/video-info2x.png"
              alt="video-info"
              style={{ height: "45px", width: "100%" }}
            />
          </div>
        </VtmnCard>
      </div>
      <div style={{ width: "60px" }}></div>
    </div>
  );
};
