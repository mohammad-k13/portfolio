import React from "react";
import LogoIcon from "../icons/logo";
import Navigation from "./navigation";
import HireMeButton from "../hire-me-button";

const DesktopNavbar = () => {
    return (
        <>
            <div className="flex items-center">
                <LogoIcon className="size-[40px]" />
                <h1 className="text-2xl">MKA</h1>
            </div>
            <Navigation />
            <HireMeButton />
        </>
    );
};

export default DesktopNavbar;
