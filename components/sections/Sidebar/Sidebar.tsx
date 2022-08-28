import {useState} from "react";
import styled from "styled-components";
import {FaBars, FaHome, FaEnvelope, FaTiktok, FaYoutube, FaDotCircle} from "react-icons/fa";

interface SidebarContainerProps {
  isOpen: boolean;
}

const SidebarContainer = styled.div<SidebarContainerProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: grey;
  width: ${(p) => (p.isOpen ? "96px" : "240px")};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  transition: 0.6s;
  padding: 0 1rem;
  overflow: hidden;

  .closed {
    opacity: 0;
  }
`;

const MenuItem = styled.div`
  display: flex;
  gap: 0.5rem;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: opacity 0.4s ease 0s;
  }
`;

const Sidebar: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const Divider = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    width: 70%;
  `;

  return (
    <SidebarContainer isOpen={sidebarIsOpen}>
      <FaBars size={25} onClick={toggleSidebar} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          height: "100%",
        }}
      >
        <div>
          <MenuItem>
            <FaHome size={25} />
            <p className={sidebarIsOpen ? "closed" : ""}>Inicio</p>
          </MenuItem>
          <MenuItem>
            <FaEnvelope size={25} />
            <p className={sidebarIsOpen ? "closed" : ""}>Envia tu micro</p>
          </MenuItem>
        </div>
        <Divider />
        <div>
          <MenuItem>
            <FaTiktok size={25} />
            <p className={sidebarIsOpen ? "closed" : ""}>Tiktok</p>
          </MenuItem>
          <MenuItem>
            <FaYoutube size={25} />
            <p className={sidebarIsOpen ? "closed" : ""}>Youtube</p>
          </MenuItem>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
