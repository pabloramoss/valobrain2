import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import styled from "styled-components";

import {NavLink} from "./NavLink";
interface SidebarContainerProps {
  isOpen: boolean;
}
const Links = [
  {
    label: "Home",
    icon: "<FaHome />",
    href: "/",
  },
  {
    label: "Micro-strats",
    icon: "<FaTv />",
    href: "/micro-strats",
  },
  {
    label: "Sens calculator",
    icon: "<FaCalculator />",
    href: "/sens-calculator",
  },
];

const SidebarList = styled.div`
  list-style-type: none;
  overflow: hidden;
  flex-shrink: 0;
  justify-content: center;
  justify-self: start;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
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
    z-index: 300;
    position: absolute;
    top: 70px;
    right: 0;
    border-radius: 99999px;
    cursor: pointer;
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 4px;
  }

  li {
    border-radius: 6px;
    &:hover {
      background: grey;
    }
  }

  .sidebar-links {
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

export const SidebarTest: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <SidebarContainer isOpen={sidebarIsOpen}>
      <FaArrowRight className="arrow" size={15} onClick={toggleSidebar} />
      <SidebarWrapper>
        <SidebarList>
          {Links.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
        </SidebarList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
