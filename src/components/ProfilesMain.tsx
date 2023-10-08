import { VtmnButton, VtmnCard } from "@vtmn/react";
import Image from "next/image";
import Link from "next/link";

export const ProfilesMain = () => {
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
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>People</div>
        <Link href="/">View all</Link>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1 1 0px" }}>
          {" "}
          <VtmnCard
            title=""
            img={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(42deg, rgba(0, 125, 188, 0.20) -47.39%, rgba(0, 125, 188, 0.00) 100%)",
                  marginLeft: "-16px",
                  marginRight: "-16px",
                  padding: "16px 0",
                }}
              >
                <img
                  src="/profile1.png"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </div>
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
              Antonio Panteras{" "}
            </span>
            <div style={{ margin: "12px 0" }}>Doctor Paleontologist</div>
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.36958 15.4478L13.0283 11.7891C13.7518 11.0655 14.2445 10.1436 14.4441 9.13995C14.6437 8.13632 14.5412 7.09605 14.1496 6.15067C13.758 5.20529 13.0948 4.39727 12.244 3.82877C11.3932 3.26028 10.3929 2.95685 9.36958 2.95685C8.3463 2.95685 7.346 3.26028 6.49517 3.82877C5.64433 4.39727 4.98118 5.20529 4.58956 6.15067C4.19795 7.09605 4.09545 8.13632 4.29505 9.13995C4.49464 10.1436 4.98736 11.0655 5.71089 11.7891L9.36958 15.4478ZM9.36958 17.538L4.66576 12.8342C3.73544 11.9039 3.10189 10.7186 2.84522 9.42819C2.58855 8.1378 2.72029 6.80027 3.22378 5.58475C3.72727 4.36923 4.5799 3.33031 5.67384 2.59936C6.76779 1.86841 8.05391 1.47827 9.36958 1.47827C10.6853 1.47827 11.9714 1.86841 13.0653 2.59936C14.1593 3.33031 15.0119 4.36923 15.5154 5.58475C16.0189 6.80027 16.1506 8.1378 15.8939 9.42819C15.6373 10.7186 15.0037 11.9039 14.0734 12.8342L9.36958 17.538ZM9.36958 9.60865C9.76164 9.60865 10.1376 9.4529 10.4149 9.17568C10.6921 8.89845 10.8478 8.52245 10.8478 8.13039C10.8478 7.73833 10.6921 7.36233 10.4149 7.0851C10.1376 6.80787 9.76164 6.65213 9.36958 6.65213C8.97752 6.65213 8.60152 6.80787 8.3243 7.0851C8.04707 7.36233 7.89132 7.73833 7.89132 8.13039C7.89132 8.52245 8.04707 8.89845 8.3243 9.17568C8.60152 9.4529 8.97752 9.60865 9.36958 9.60865ZM9.36958 11.0869C8.58546 11.0869 7.83346 10.7754 7.27901 10.221C6.72455 9.66651 6.41306 8.91451 6.41306 8.13039C6.41306 7.34627 6.72455 6.59427 7.27901 6.03981C7.83346 5.48536 8.58546 5.17387 9.36958 5.17387C10.1537 5.17387 10.9057 5.48536 11.4602 6.03981C12.0146 6.59427 12.3261 7.34627 12.3261 8.13039C12.3261 8.91451 12.0146 9.66651 11.4602 10.221C10.9057 10.7754 10.1537 11.0869 9.36958 11.0869Z"
                  fill="#001018"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>Tbilisi, Georgia</span>
            </div>
          </VtmnCard>
        </div>
        <div style={{ width: "35px" }}></div>
        <div style={{ flex: "1 1 0px" }}>
          {" "}
          <VtmnCard
            title=""
            img={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(42deg, rgba(83, 0, 188, 0.20) -47.39%, rgba(255, 255, 255, 0.20) 100%)",
                  marginLeft: "-16px",
                  marginRight: "-16px",
                  padding: "16px 0",
                }}
              >
                <img
                  src="/profile2.png"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </div>
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
              Regina Phalenge
            </span>
            <div style={{ margin: "12px 0" }}>Astrophotographer</div>
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.36958 15.4478L13.0283 11.7891C13.7518 11.0655 14.2445 10.1436 14.4441 9.13995C14.6437 8.13632 14.5412 7.09605 14.1496 6.15067C13.758 5.20529 13.0948 4.39727 12.244 3.82877C11.3932 3.26028 10.3929 2.95685 9.36958 2.95685C8.3463 2.95685 7.346 3.26028 6.49517 3.82877C5.64433 4.39727 4.98118 5.20529 4.58956 6.15067C4.19795 7.09605 4.09545 8.13632 4.29505 9.13995C4.49464 10.1436 4.98736 11.0655 5.71089 11.7891L9.36958 15.4478ZM9.36958 17.538L4.66576 12.8342C3.73544 11.9039 3.10189 10.7186 2.84522 9.42819C2.58855 8.1378 2.72029 6.80027 3.22378 5.58475C3.72727 4.36923 4.5799 3.33031 5.67384 2.59936C6.76779 1.86841 8.05391 1.47827 9.36958 1.47827C10.6853 1.47827 11.9714 1.86841 13.0653 2.59936C14.1593 3.33031 15.0119 4.36923 15.5154 5.58475C16.0189 6.80027 16.1506 8.1378 15.8939 9.42819C15.6373 10.7186 15.0037 11.9039 14.0734 12.8342L9.36958 17.538ZM9.36958 9.60865C9.76164 9.60865 10.1376 9.4529 10.4149 9.17568C10.6921 8.89845 10.8478 8.52245 10.8478 8.13039C10.8478 7.73833 10.6921 7.36233 10.4149 7.0851C10.1376 6.80787 9.76164 6.65213 9.36958 6.65213C8.97752 6.65213 8.60152 6.80787 8.3243 7.0851C8.04707 7.36233 7.89132 7.73833 7.89132 8.13039C7.89132 8.52245 8.04707 8.89845 8.3243 9.17568C8.60152 9.4529 8.97752 9.60865 9.36958 9.60865ZM9.36958 11.0869C8.58546 11.0869 7.83346 10.7754 7.27901 10.221C6.72455 9.66651 6.41306 8.91451 6.41306 8.13039C6.41306 7.34627 6.72455 6.59427 7.27901 6.03981C7.83346 5.48536 8.58546 5.17387 9.36958 5.17387C10.1537 5.17387 10.9057 5.48536 11.4602 6.03981C12.0146 6.59427 12.3261 7.34627 12.3261 8.13039C12.3261 8.91451 12.0146 9.66651 11.4602 10.221C10.9057 10.7754 10.1537 11.0869 9.36958 11.0869Z"
                  fill="#001018"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>Tbilisi, Georgia</span>
            </div>
          </VtmnCard>
        </div>
        <div style={{ width: "35px" }}></div>

        <div style={{ flex: "1 1 0px" }}>
          {" "}
          <VtmnCard
            title=""
            img={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(42deg, rgba(188, 0, 113, 0.20) -47.39%, rgba(255, 255, 255, 0.20) 100%)",
                  marginLeft: "-16px",
                  marginRight: "-16px",
                  padding: "16px 0",
                }}
              >
                <img
                  src="/profile3.png"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </div>
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
              Regina Phalenge
            </span>
            <div style={{ margin: "12px 0" }}>Astrophotographer</div>
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.36958 15.4478L13.0283 11.7891C13.7518 11.0655 14.2445 10.1436 14.4441 9.13995C14.6437 8.13632 14.5412 7.09605 14.1496 6.15067C13.758 5.20529 13.0948 4.39727 12.244 3.82877C11.3932 3.26028 10.3929 2.95685 9.36958 2.95685C8.3463 2.95685 7.346 3.26028 6.49517 3.82877C5.64433 4.39727 4.98118 5.20529 4.58956 6.15067C4.19795 7.09605 4.09545 8.13632 4.29505 9.13995C4.49464 10.1436 4.98736 11.0655 5.71089 11.7891L9.36958 15.4478ZM9.36958 17.538L4.66576 12.8342C3.73544 11.9039 3.10189 10.7186 2.84522 9.42819C2.58855 8.1378 2.72029 6.80027 3.22378 5.58475C3.72727 4.36923 4.5799 3.33031 5.67384 2.59936C6.76779 1.86841 8.05391 1.47827 9.36958 1.47827C10.6853 1.47827 11.9714 1.86841 13.0653 2.59936C14.1593 3.33031 15.0119 4.36923 15.5154 5.58475C16.0189 6.80027 16.1506 8.1378 15.8939 9.42819C15.6373 10.7186 15.0037 11.9039 14.0734 12.8342L9.36958 17.538ZM9.36958 9.60865C9.76164 9.60865 10.1376 9.4529 10.4149 9.17568C10.6921 8.89845 10.8478 8.52245 10.8478 8.13039C10.8478 7.73833 10.6921 7.36233 10.4149 7.0851C10.1376 6.80787 9.76164 6.65213 9.36958 6.65213C8.97752 6.65213 8.60152 6.80787 8.3243 7.0851C8.04707 7.36233 7.89132 7.73833 7.89132 8.13039C7.89132 8.52245 8.04707 8.89845 8.3243 9.17568C8.60152 9.4529 8.97752 9.60865 9.36958 9.60865ZM9.36958 11.0869C8.58546 11.0869 7.83346 10.7754 7.27901 10.221C6.72455 9.66651 6.41306 8.91451 6.41306 8.13039C6.41306 7.34627 6.72455 6.59427 7.27901 6.03981C7.83346 5.48536 8.58546 5.17387 9.36958 5.17387C10.1537 5.17387 10.9057 5.48536 11.4602 6.03981C12.0146 6.59427 12.3261 7.34627 12.3261 8.13039C12.3261 8.91451 12.0146 9.66651 11.4602 10.221C10.9057 10.7754 10.1537 11.0869 9.36958 11.0869Z"
                  fill="#001018"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>Tbilisi, Georgia</span>
            </div>
          </VtmnCard>
        </div>
        <div style={{ width: "35px" }}></div>

        <div style={{ flex: "1 1 0px" }}>
          {" "}
          <VtmnCard
            title=""
            img={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(42deg, rgba(83, 0, 188, 0.20) -47.39%, rgba(255, 255, 255, 0.20) 100%)",
                  marginLeft: "-16px",
                  marginRight: "-16px",
                  padding: "16px 0",
                }}
              >
                <img
                  src="/profile4.png"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </div>
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
              Kim Ki Duk
            </span>
            <div style={{ margin: "12px 0" }}>Videographer</div>
            <div style={{ display: "flex" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.36958 15.4478L13.0283 11.7891C13.7518 11.0655 14.2445 10.1436 14.4441 9.13995C14.6437 8.13632 14.5412 7.09605 14.1496 6.15067C13.758 5.20529 13.0948 4.39727 12.244 3.82877C11.3932 3.26028 10.3929 2.95685 9.36958 2.95685C8.3463 2.95685 7.346 3.26028 6.49517 3.82877C5.64433 4.39727 4.98118 5.20529 4.58956 6.15067C4.19795 7.09605 4.09545 8.13632 4.29505 9.13995C4.49464 10.1436 4.98736 11.0655 5.71089 11.7891L9.36958 15.4478ZM9.36958 17.538L4.66576 12.8342C3.73544 11.9039 3.10189 10.7186 2.84522 9.42819C2.58855 8.1378 2.72029 6.80027 3.22378 5.58475C3.72727 4.36923 4.5799 3.33031 5.67384 2.59936C6.76779 1.86841 8.05391 1.47827 9.36958 1.47827C10.6853 1.47827 11.9714 1.86841 13.0653 2.59936C14.1593 3.33031 15.0119 4.36923 15.5154 5.58475C16.0189 6.80027 16.1506 8.1378 15.8939 9.42819C15.6373 10.7186 15.0037 11.9039 14.0734 12.8342L9.36958 17.538ZM9.36958 9.60865C9.76164 9.60865 10.1376 9.4529 10.4149 9.17568C10.6921 8.89845 10.8478 8.52245 10.8478 8.13039C10.8478 7.73833 10.6921 7.36233 10.4149 7.0851C10.1376 6.80787 9.76164 6.65213 9.36958 6.65213C8.97752 6.65213 8.60152 6.80787 8.3243 7.0851C8.04707 7.36233 7.89132 7.73833 7.89132 8.13039C7.89132 8.52245 8.04707 8.89845 8.3243 9.17568C8.60152 9.4529 8.97752 9.60865 9.36958 9.60865ZM9.36958 11.0869C8.58546 11.0869 7.83346 10.7754 7.27901 10.221C6.72455 9.66651 6.41306 8.91451 6.41306 8.13039C6.41306 7.34627 6.72455 6.59427 7.27901 6.03981C7.83346 5.48536 8.58546 5.17387 9.36958 5.17387C10.1537 5.17387 10.9057 5.48536 11.4602 6.03981C12.0146 6.59427 12.3261 7.34627 12.3261 8.13039C12.3261 8.91451 12.0146 9.66651 11.4602 10.221C10.9057 10.7754 10.1537 11.0869 9.36958 11.0869Z"
                  fill="#001018"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>Tbilisi, Georgia</span>
            </div>
          </VtmnCard>
        </div>
      </div>
    </div>
  );
};