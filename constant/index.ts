import { Call, Folder2, Home2, InfoCircle } from "iconsax-react";
import { INavLink } from "@/types";

export const navLinks: INavLink[] = [
    {
        icon: Home2,
        value: "home",
        label: "Home",
    },
    {
        icon: InfoCircle,
        value: "about",
        label: "About",
    },
    {
        icon: Folder2,
        value: "projects",
        label: "Projects",
    },
    {
        icon: Call,
        value: "contact",
        label: "Contact",
    },
];
