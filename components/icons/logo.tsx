import { IIcon } from "@/types";
import Image from "next/image";
import React from "react";

const LogoIcon = ({ alt = "LogoIcon", className, height = 22, width = 22 }: IIcon) => {
    return <Image src={"/logo.svg"} width={width} height={height} alt={alt} className={className} />;
};

export default LogoIcon;
