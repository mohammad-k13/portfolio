import React, { ButtonHTMLAttributes } from "react";
import GradientBg from "../general/gradient-bg";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(
    (
        {
            className,
            children,
            size = "md",
            fullWidth = false,
            isLoading = false,
            disabled = false,
            type = "button",
            ...props
        },
        ref
    ) => {
        const baseClasses =
            "relative font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 group-hover:rounded-bl-none group-hover:rounded-tr-none";

        const sizeClasses = {
            sm: "text-sm py-1.5 px-3",
            md: "text-base py-2 px-4",
            lg: "text-lg py-2.5 px-5",
        };

        // State classes
        const stateClasses =
            disabled || isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90";

        return (
            <GradientBg
                className={twMerge(
                    fullWidth ? "w-full" : "w-fit",
                    disabled ? "opacity-70" : "r",
                    `hover:rounded-bl-none hover:rounded-tr-none transition-all cursor-pointer group ${className}`
                )}
                innerClassName={twMerge(
                    baseClasses,
                    sizeClasses[size],
                    stateClasses,
                    fullWidth ? "w-full" : ""
                )}
                as="button"
                {...props}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <div>loading</div>
                        {children}
                    </span>
                ) : (
                    children
                )}
            </GradientBg>
        );
    }
);

Button.displayName = "Button";

export default Button;
