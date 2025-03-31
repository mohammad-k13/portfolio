import { type Icon } from "iconsax-react";
import { type ReactNode, type JSX } from "react";

export interface IIcon {
    width?: number;
    height?: number;
    alt?: string;
    className?: string;
}

export interface IAvatar {
    url?: string;
    className?: string;
}

export interface IButton {
    className?: string;
    children: ReactNode;
}

export type Pages = "home" | "about" | "projects" | "contact"
export interface INavLink {
    icon: Icon,
    value: Pages,
    label: string
}