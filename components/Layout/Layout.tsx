import React from "react";

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
      <div role="main" style={{display: "flex", flexDirection: "column"}}>
        {/* SEO Head */}
        <LayoutHead {...headProps} />

        {/* Navbar */}
        {`<Navbar />`}

        {/* Main Content */}
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          {children}
          {/* Footer */}
          {`<Footer />`}
        </div>
      </div>
    </>
  );
};

export default Layout;
