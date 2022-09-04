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
  width: ${(p) => (p.isOpen ? "200px" : "70px")};
  display: flex;
  flex-direction: column;
  transition: 0.6s;
  overflow: hidden;
  padding-top: 2rem;

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
      {/* <FaBars size={25} onClick={toggleSidebar} />
      <div className="div-container">
        <div>
          <span className="span-container">
            <a className="a-wrapper">
              <div className="div-wrapper">
                <div className="icon-div">
                  <span className="span-wrapper icon-span">
                    <span className="icon-span" />
                    <FaHome className="icon" size={25} />
                  </span>
                </div>
                <p>home</p>
              </div>
            </a>
          </span>
        </div>
      </div>
      <div>
        <p>tiktok</p>
        <p>youtube</p>
      </div>
      <footer>valobrain</footer> */}
      <MenuItem>
        <FaBars size={25} onClick={toggleSidebar} />
      </MenuItem>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "10rem",
        }}
      >
        <div style={{display: "flex", flexDirection: "column", width: "100%", gap: "2rem"}}>
          <MenuItem>
            <div style={{flexShrink: "0", display: "flex"}}>
              <FaHome className="icon" size={25} />
            </div>
            <p className={sidebarIsOpen ? "" : "closed"}>Inicio</p>
          </MenuItem>
          <MenuItem>
            <div style={{flexShrink: "0", display: "flex"}}>
              <FaEnvelope size={25} />
            </div>
            <p className={sidebarIsOpen ? "" : "closed"}>Envia tu micro</p>
          </MenuItem>
        </div>
        <div style={{display: "flex", flexDirection: "column", width: "100%", gap: "2rem"}}>
          <MenuItem>
            <div style={{flexShrink: "0", display: "flex"}}>
              {" "}
              <FaTiktok size={20} />
            </div>
            <p className={sidebarIsOpen ? "" : "closed"}>Tiktok</p>
          </MenuItem>
          <MenuItem>
            <div style={{flexShrink: "0", display: "flex"}}>
              <FaYoutube size={20} />
            </div>
            <p className={sidebarIsOpen ? "" : "closed"}>Youtube</p>
          </MenuItem>
        </div>
        <div style={{position: "absolute", bottom: "0"}}>
          {sidebarIsOpen ? (
            <p style={{color: "lightgrey"}}>© {new Date().getFullYear()} Valobrain</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </SidebarContainer>
  );
};
