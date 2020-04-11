import React from "react";
import Header from "src/components/header-component/header-component";
import Footer from "src/components/footer-component/footer-component";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className="container main">{children}</div>
    <Footer />
  </>
);

export default Layout;
