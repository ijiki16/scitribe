import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" style={{ fontSize: "20px", fontWeight: 400 }}>
      <img
        src="/sci-tribe.png"
        alt="logo"
        style={{ height: "75px", marginBottom: "16px" }}
      />
    </Link>
  );
};

const MiddleArea = () => {
  return (
    <div style={{ display: "flex", padding: "0 40px" }}>
      <Link
        href="/about"
        style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}
      >
        About
      </Link>
      <Link
        href="/projects"
        style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}
      >
        Projects
      </Link>
      <Link
        href="/people"
        style={{ padding: "0 30px", fontSize: "20px", fontWeight: 400 }}
      >
        People
      </Link>
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
