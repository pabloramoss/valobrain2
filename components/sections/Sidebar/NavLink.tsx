import Link from "next/link";
import styled from "styled-components";
import React from "react";
import * as FontAwesome from "react-icons/fa";

//@ts-ignore
const Icon = (props) => {
  const {iconName, size, color} = props;
  //@ts-ignore
  const icon = React.createElement(FontAwesome[iconName]);

  return <div style={{fontSize: size, color: color}}>{icon}</div>;
};

export interface NavbarLinkProps {
  /** Href to navigate when interected. Required */
  href: string;
  /** Visual text to display. Required */
  label: string;
}
const SidebarLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  overflow: hidden;
  flex-shrink: 0;
  justify-content: start;
  color: white;
  width: 100%;
`;

const SidebarItem = styled.li`
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  padding: 0 10px;

  p {
    font-weight: 600;
  }
`;

export const NavLink: React.FC<NavbarLinkProps> = (props) => {
  const {href, label} = props;

  return (
    <SidebarItem>
      <Link href={href}>
        {/* TODO: Add Icon and p tag */}
        <SidebarLink>
          <Icon iconName={"FaTwitter"} size={30} />
          <p>{label}</p>
        </SidebarLink>
      </Link>
    </SidebarItem>
  );
};
