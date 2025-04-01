"use client";
import { navLinks } from "@/constant";
import React, { useRef, useState } from "react";
import useNavlinks from "@/stores/navlinks";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import NavigationCursor from "./navigation-cursor";
import { INavigationCursorPosition } from "@/types";
import NavLink from "./navlink";

const Navigation = () => {
    const [navigationCursorPosition, setNavigationCursorPosition] =
        useState<INavigationCursorPosition>({
            width: 150,
            left: 50,
            opacity: 0,
        });

    return (
        <div className="h-14 w-full max-w-[400px] rounded-full !bg-linear-to-l from-light-cobalt-blue to-light-apricot overflow-hidden flex items-center justify-center">
            <ul
                className="relative w-[99%] h-[96%] grid grid-cols-4 grid-flow-col gap-4 bg-navlinks-background py-[.3rem] px-[.40rem] rounded-full"
                onMouseEnter={() => {
                    setNavigationCursorPosition((pv) => ({ ...pv, opacity: 1 }));
                }}
                onMouseLeave={() => {
                    setNavigationCursorPosition((pv) => ({ ...pv, opacity: 0 }));
                }}
            >
                <NavigationCursor position={navigationCursorPosition} />

                {navLinks.map((navItem, index) => (
                    <NavLink
                        key={index}
                        data={navItem}
                        setNavigationCursorPosition={setNavigationCursorPosition}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
