"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import LogoIcon from "../icons/logo";
import MenuIcon from "../icons/menu";
import { Add } from "iconsax-react";

const MobileNavbar = () => {
    return (
        <>
            <div className="flex items-center">
                <LogoIcon className="size-[40px]" />
                <h1 className="text-2xl">MKA</h1>
            </div>

            <div className="h-14 w-16 rounded-full !bg-linear-to-l from-light-cobalt-blue to-light-apricot overflow-hidden flex items-center justify-center">
                <div className="relative w-[96%] h-[92%] bg-navlinks-background py-[.3rem] px-[.40rem] rounded-full flex items-center justify-center">
                    <MenuIcon className="size-full"/>
                    {/* <Add variant="Broken" size={22} className="size-full rotate-45" color="#fff"/> */}
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
