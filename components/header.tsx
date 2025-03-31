import React from "react";
import LogoIcon from "./icons/logo";
import HireMeButton from "./hire-me-button";
import Navigation from "./navigation";

const Header = () => {
    return (
        <header className="w-full min-h-14 flex items-center justify-between py-10">
          <div className="flex items-center">
            <LogoIcon className="size-[40px]"/>
            <h1 className="text-2xl">MKA</h1>
          </div>
          <Navigation />
          <HireMeButton />
        </header>
    );
};

export default Header;
