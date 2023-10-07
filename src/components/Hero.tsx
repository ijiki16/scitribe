import Image from "next/image";

export const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src="/stars.png"
        alt="hero"
        width={500}
        height={500}
        style={{ width: "100%", height: "566px" }}
      />
      <div>
        <div>
          <div>Marketplace for open science projects</div>
        </div>
      </div>
    </div>
  );
};
