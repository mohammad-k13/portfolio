"use client";
import { navLinks } from "@/constant";
import React from "react";
import useNavlinks from "@/stores/navlinks";
import { twMerge } from "tailwind-merge";

const Navigation = () => {
    const { activeNavlink, setActiveNavlink } = useNavlinks();

    return (
        <div className="h-14 w-full max-w-[400px] rounded-full !bg-linear-to-l from-light-cobalt-blue to-light-apricot overflow-hidden flex items-center justify-center">
            <div className="w-[99%] h-[96%] grid grid-cols-4 grid-flow-col gap-4 bg-navlinks-background py-[.3rem] px-[.40rem] rounded-full">
                {navLinks.map(({ icon: Icon, label, value }, index) => (
                    <div
                        key={index}
                        className={twMerge(
                            activeNavlink === value && "bg-navlink-hover-background",
                            "h-full px-3 rounded-full text-lg flex items-center justify-center cursor-pointer col-span-1"
                        )}
                        onClick={() => setActiveNavlink(value)}
                    >
                        {activeNavlink === value ? (
                            <Icon variant="Broken" color="#ffff" size={20} />
                        ) : (
                            <p>{label}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navigation;
