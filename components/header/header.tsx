import React from "react";
import LogoIcon from "../icons/logo";
import HireMeButton from "../hire-me-button";
import Navigation from "./navigation";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

const Header = () => {
    return (
        <header className="w-full min-h-14">
          <nav className="h-full w-full flex items-center justify-between py-10 max-md:hidden">
            <DesktopNavbar />
          </nav>

          <nav className="h-full w-full flex items-center justify-between py-10 md:hidden">
            <MobileNavbar />
          </nav>
        </header>
    );
};

export default Header;
