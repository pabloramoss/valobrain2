import React from "react";

import {Sidebar} from "../sections/Sidebar";
import {SidebarTest} from "../sections/Sidebar/SidebarTest";

import LayoutHead, {LayoutHeadProps} from "./LayoutHead";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {headProps, children} = props;

  return (
    <>
      {/* SEO Head */}
      <LayoutHead {...headProps} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#2D3748",
          height: "100vh",
        }}
      >
        <div style={{display: "flex"}}>
          {/* <Sidebar /> */}
          <SidebarTest />
          {/* Main Content */}
          <div style={{maxWidth: "700px"}}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
