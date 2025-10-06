"use client";

import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { UserButton } from "@clerk/nextjs";

type UserControlProps = {
    showName: boolean;
}

export const UserControl = ({showName = true}: UserControlProps) => {
    const currentTheme = useCurrentTheme();

    return (
        <>
        <UserButton 
            showName={showName}
            appearance={{
                elements: {
                    userButtonBox: "rounded-md!",
                    userButtonAvatarBox: "rounded-md! size-8!",
                    userButtonTrigger: "rounded-md!"
                },
                theme: currentTheme === "dark" ? dark : undefined, 
            }}
        />
        </>
    )
}
