import { IAvatar } from "@/types";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import GradientBg from "../general/gradient-bg";

const Avatar = ({
    url = "https://avatars.githubusercontent.com/u/88265699?v=4",
}: IAvatar) => {
    return (
        <GradientBg>
            {url ? (
                <Image
                    src={url}
                    width={40}
                    height={40}
                    alt="profile-image"
                    className="size-full rounded-full"
                />
            ) : (
                <AvatarIcon className="size-2/3" />
            )}
        </GradientBg>
    );
};

export default Avatar;
