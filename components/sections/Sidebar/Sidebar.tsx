import {useState} from "react";
import styled from "styled-components";
import {
  FaHome,
  FaEnvelope,
  FaTiktok,
  FaYoutube,
  FaArrowRight,
  FaCalculator,
  FaProjectDiagram,
  FaTv,
} from "react-icons/fa";
import Link from "next/link";

interface SidebarContainerProps {
  isOpen: boolean;
}

const SidebarContainer = styled.div<SidebarContainerProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: ${(p) => (p.isOpen ? "220px" : "70px")};
  display: flex;
  flex-direction: column;
  transition: 0.6s;
  overflow: hidden;
  background: #1a202c;
  color: white;
  box-shadow: 10px 0 20px rgb(0 0 0 / 25%);

  .arrow {
    transform: ${(p) => (p.isOpen ? "rotatez(0deg)" : "rotatez(-180deg)")};
    transition: transform 400ms ease-in-out;
  }

  li {
    border-radius: 6px;
    &:hover {
      background: grey;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    overflow: hidden;
    flex-shrink: 0;
    justify-content: start;
    color: white;
    width: 100%;
  }
`;

export const Sidebar: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <SidebarContainer isOpen={sidebarIsOpen}>
      <div
        style={{
          listStyleType: "none",
          overflow: "hidden",
          justifyContent: "start",
          display: "flex",
          padding: "20px",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <img alt="valobrain logo" height={30} src="https://via.placeholder.com/30" />
        <h2>Valobrain</h2>
      </div>
      <FaArrowRight
        className="arrow"
        size={15}
        style={{
          zIndex: "300",
          position: "absolute",
          top: "70px",
          right: "0",
          borderRadius: "99999px",
          cursor: "pointer",
          border: "1px solid lightgrey",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
          padding: "4px",
        }}
        onClick={toggleSidebar}
      />
      <nav className="nav" style={{position: "relative"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              overflow: "hidden",
              flexShrink: "0",
              justifyContent: "center",
              justifySelf: "start",
              display: "flex",
              flexDirection: "column",
              padding: "0 10px",
            }}
          >
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <Link href="">
                <a href="">
                  <FaHome size={30} />
                  <p style={{fontWeight: "600"}}>Home</p>
                </a>
              </Link>
            </li>
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <Link href="/micro-strats">
                <a href="">
                  <FaTv size={30} />
                  <p style={{fontWeight: "600"}}>Micro strats</p>
                </a>
              </Link>
            </li>
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <Link href="/sens-calculator">
                <a href="">
                  <FaCalculator size={30} />
                  <p style={{fontWeight: "600"}}>Sens calculator</p>
                </a>
              </Link>
            </li>
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <Link href="/flow-chart">
                <a href="">
                  <FaProjectDiagram size={30} />
                  <p style={{fontWeight: "600"}}>Flow chart</p>
                </a>
              </Link>
            </li>
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <a href="">
                <FaEnvelope size={30} />
                <p style={{fontWeight: "600"}}>Support</p>
              </a>
            </li>
          </ul>
          <ul
            style={{
              listStyleType: "none",
              overflow: "hidden",
              flexShrink: "0",
              justifyContent: "center",
              justifySelf: "start",
              display: "flex",
              flexDirection: "column",
              padding: "0 10px",
            }}
          >
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <a href="https://www.tiktok.com/@valobrain" rel="noreferrer" target="_blank">
                <FaTiktok size={30} />
                <p style={{fontWeight: "600"}}>Tiktok</p>
              </a>
            </li>
            <li
              style={{
                flexShrink: "0",
                overflow: "hidden",
                display: "flex",
                padding: "0 10px",
              }}
            >
              <a
                href="https://www.youtube.com/channel/UCjg1YvYLP3KbPPdEZ57GJuA"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube size={30} />
                <p style={{fontWeight: "600"}}>Youtube</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </SidebarContainer>
  );
};
