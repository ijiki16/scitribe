import { VtmnButton, VtmnNavbar, VtmnNavbarLink } from "@vtmn/react";

const Logo = () => {
  return <div style={{ fontSize: "20px", fontWeight: 400 }}>Logo</div>;
};

const MiddleArea = () => {
  return (
    <div style={{ display: "flex", padding: "0 150px" }}>
      <div style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}>
        About
      </div>
      <div style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}>
        Projects
      </div>
      <div style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}>
        People
      </div>
    </div>
  );
};

const RightNav = () => {
  return (
    <div style={{ fontSize: "20px", fontWeight: 400 }}>Log in/Register</div>
  );
};

export const Navigation = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#014669",
        color: "white",
        height: "70px",
        padding: "0 90px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <MiddleArea />
      </div>

      <RightNav />
    </div>
  );
};
