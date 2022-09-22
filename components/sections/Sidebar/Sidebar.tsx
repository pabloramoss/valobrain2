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
  background: #1A202C;
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

  .icon {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }

  .icon-span {
    box-sizing: border-box;
    display: block;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    max-width: 100%;
  }

  .span-wrapper {
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
    max-width: 100%;
  }

  .icon-div {
    width: 32px;
    height: 32px;
    margin-right: 0px;
    flex-shrink: 0;
  }

  .div-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    transition: all 0.4s ease 0s;
    padding: 8px;
  }

  .a-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 48px;
    background-color: transparent;
    border-radius: 6px;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    flex-shrink: 1;
    text-decoration: none;
    font: 400 1.4rem Inter;
    color: rgb(53, 52, 61);
  }

  .span-container {
    display: block;
  }

  .div-container {
    padding-top: 64px;
    flex: 1 1 0%;
    min-height: 80px;
    overflow: hidden auto;
    padding: 0px 24px;
  }

  .closed {
    opacity: 0;
  }

  .nav {
    position: absolute;
    box-shadow: 0px 0px 10px var(--clr-gray300);
    height: 100vh;
  
    &__expand {
      width: 2rem;
      heigtht: 2rem;
      fill: var(--clr-gray400);
      box-shadow: 0px 0px 10px var(--clr-gray300);
      border-radius: 50%;
      position: absolute;
      right: -1rem;
      top: 1rem;
      z-index: 99;
      cursor: pointer;
      transform: rotatez(-180deg);
      transition: transform 200ms ease-in-out;
  
      &:hover {
        fill: var(--clr-gray500);
      }
    }
  
    &__list {
      display: flex;
      flex-direction: column;
  
      &item {
        list-style: none;
        transition: all 200ms ease-in;
        padding: 1rem 1.5rem;
        border-left: 6px solid transparent;
        cursor: pointer;
  
        &:first-child {
          margin-bottom: 2rem;
        }
  
        &:hover {
          background-color: var(--clr-gray150);
        }
  
        a {
          display: flex;
          gap: 1rem;
          align-items: center;
          color: var(--clr-gray400);
          text-decoration: none;
          font-weight: 500;
        }
  
        svg {
          fill: var(--clr-gray400);
          width: 2rem;
        }
  
        &-active {
          background-color: var(--clr-gray200);
          border-left: 6px solid var(--clr-primary);
  
          svg,
          p {
            color: var(--clr-primary);
            fill: var(--clr-primary);
          }
        }
      }
    }
`;

const MenuItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;

  &:hover {
    background: lightgrey;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity 0.4s ease 0s;
    margin: 0;
  }

  .icon {
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;

export const Sidebar: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const Divider = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    width: 70%;
  `;

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
                <a
                  href=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    overflow: "hidden",
                    flexShrink: "0",
                    justifyContent: "start",
                    color: "white",
                  }}
                >
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
                <a
                  href=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    overflow: "hidden",
                    flexShrink: "0",
                    justifyContent: "start",
                    color: "white",
                  }}
                >
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
                <a
                  href=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    overflow: "hidden",
                    flexShrink: "0",
                    justifyContent: "start",
                    color: "white",
                  }}
                >
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
                <a
                  href=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    overflow: "hidden",
                    flexShrink: "0",
                    justifyContent: "start",
                    color: "white",
                  }}
                >
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
              <a
                href=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  overflow: "hidden",
                  flexShrink: "0",
                  justifyContent: "start",
                  color: "white",
                }}
              >
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
              <a
                href="www.youtube.com/channel/UCjg1YvYLP3KbPPdEZ57GJuA"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  overflow: "hidden",
                  flexShrink: "0",
                  justifyContent: "start",
                  color: "white",
                }}
                target="_blank"
              >
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
                href="www.tiktok.com/@valobrain"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  overflow: "hidden",
                  flexShrink: "0",
                  justifyContent: "start",
                  color: "white",
                }}
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
