import React, { type JSX, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type GradientBgProps = {
    className?: string;
    children: ReactNode;
    innerClassName?: string;
    as?: keyof JSX.IntrinsicElements;
};

const GradientBg = ({
    className,
    children,
    innerClassName,
    as: Component = "div",
}: GradientBgProps) => {
    const baseClasses =
        "p-[2px] rounded-3xl !bg-linear-to-r from-light-cobalt-blue to-light-apricot overflow-hidden";
    const innerBaseClasses =
        "w-full h-full rounded-3xl !bg-linear-to-l from-light-cobalt-blue to-light-apricot";

    return (
        <Component className={twMerge(baseClasses, className)}>
            <div className={twMerge(innerBaseClasses, innerClassName)}>{children}</div>
        </Component>
    );
};

export default GradientBg;
