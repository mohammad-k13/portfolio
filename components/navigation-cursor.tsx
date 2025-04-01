import { INavigationCursorPosition } from "@/types";
import React from "react";
import { motion } from "motion/react";

const NavigationCursor = ({ position }: { position: INavigationCursorPosition }) => {
    return (
        <motion.li
            animate={position as any}
            className="absolute bg-navlink-hover-background h-3/4 rounded-full top-1/2 -translate-y-1/2"
        ></motion.li>
    );
};

export default NavigationCursor;
