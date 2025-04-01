"use client";

import useNavlinks from "@/stores/navlinks";
import { INavigationCursorPosition, INavLink } from "@/types";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "motion/react";

type NavLinkProps = {
    data: INavLink;
    setNavigationCursorPosition: Dispatch<SetStateAction<INavigationCursorPosition>>;
};
const NavLink = (props: NavLinkProps) => {
    const {
        data: { icon: Icon, label, value },
        setNavigationCursorPosition,
    } = props;

    const { activeNavlink, setActiveNavlink } = useNavlinks();

    const navlinkRef = useRef<HTMLLIElement | null>(null);

    return (
        <li
            className={
                "h-full px-3 rounded-full text-lg flex items-center justify-center cursor-pointer col-span-1 aboslute z-10 overflow-hidden text-white mix-blend-difference"
            }
            onClick={() => setActiveNavlink(value)}
            ref={navlinkRef}
            onMouseEnter={() => {
                if (!navlinkRef.current) return;

                const { width } = navlinkRef.current.getBoundingClientRect();
                setNavigationCursorPosition({
                    width,
                    opacity: 1,
                    left: navlinkRef.current.offsetLeft,
                });
            }}
        >
            <motion.div
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={
                    activeNavlink === value
                        ? { opacity: 0, y: -10, scale: 0.8 }
                        : { opacity: 1, y: 0, scale: 1 }
                }
                exit={{ opacity: 0, y: -10, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <p>{label}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={
                    activeNavlink === value
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 10, scale: 0.8 }
                }
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Icon variant="Broken" color="#ffff" size={20} />
            </motion.div>
        </li>
    );
};

export default NavLink;
