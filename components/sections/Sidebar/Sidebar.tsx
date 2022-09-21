import {useState} from "react";
import styled from "styled-components";
import {
  FaBars,
  FaHome,
  FaEnvelope,
  FaTiktok,
  FaYoutube,
  FaDotCircle,
  FaArrowRight,
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
  width: ${(p) => (p.isOpen ? "200px" : "70px")};
  display: flex;
  flex-direction: column;
  transition: 0.6s;
  overflow: hidden;
  background: #1A202C;
  color: white;

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
          padding: "0 20px",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <img height={30} src="https://via.placeholder.com/30" />
        <h2>Valobrain</h2>
      </div>
      <nav className="nav" style={{position: "relative"}}>
        <FaArrowRight
          size={15}
          style={{
            zIndex: "300",
            position: "absolute",
            top: "0",
            right: "0",
            borderRadius: "99999px",
            cursor: "pointer",
            border: "1px solid lightgrey",
            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
            padding: "4px",
          }}
          onClick={toggleSidebar}
        />
        {/* <svg
          className="nav__expand"
          height="40px"
          style={{
            zIndex: "300",
            position: "absolute",
            top: "0",
            right: "0",
            background: "grey",
            borderRadius: "99999px",
          }}
          viewBox="0 0 256 512"
          width="40px"
          onClick={toggleSidebar}
        >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg> */}
        <ul
          style={{
            listStyleType: "none",
            overflow: "hidden",
            flexShrink: "0",
            justifyContent: "center",
            justifySelf: "start",
            display: "flex",
            flexDirection: "column",
            padding: "0 20px",
          }}
        >
          <li
            style={{
              flexShrink: "0",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Link href="">
              <a
                href=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
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
            }}
          >
            <a
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                overflow: "hidden",
                flexShrink: "0",
                justifyContent: "start",
                color: "white",
              }}
            >
              <FaEnvelope size={30} />
              <p style={{fontWeight: "600"}}>Analytics</p>
            </a>
          </li>
          <li
            style={{
              flexShrink: "0",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Link href="/sens-calculator">
              <a
                href=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  overflow: "hidden",
                  flexShrink: "0",
                  justifyContent: "start",
                  color: "white",
                }}
              >
                <FaEnvelope size={30} />
                <p style={{fontWeight: "600"}}>Sens calculator</p>
              </a>
            </Link>
          </li>
          <li
            style={{
              flexShrink: "0",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Link href="/flow-chart">
              <a
                href=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  overflow: "hidden",
                  flexShrink: "0",
                  justifyContent: "start",
                  color: "white",
                }}
              >
                <FaEnvelope size={30} />
                <p style={{fontWeight: "600"}}>Flow chart</p>
              </a>
            </Link>
          </li>
          <li
            style={{
              flexShrink: "0",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <a
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
            }}
          >
            <a
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
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
        {/* 
        <ul className="nav__list">
          <li className="nav__listitem">
            <a href="#">
              <FaHome size={30} />
              <p>Home</p>
            </a>
          </li>
          <li className="nav__listitem nav__listitem-active">
            <a href="#">
              <FaEnvelope size={30} />
              <p>Analytics</p>
            </a>
          </li>
          <li className="nav__listitem">
            <a href="#">
              <FaTiktok size={30} />
              <p>Tiktok</p>
            </a>
          </li>
          <li className="nav__listitem">
            <a href="#">
              <FaYoutube size={30} />
              <p>Messages</p>
            </a>
          </li>
        </ul> */}
      </nav>
    </SidebarContainer>
  );
};
