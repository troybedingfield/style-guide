'use client'
import { useLayoutEffect, useState } from "react";

// const capitalize = (text: string) =>
//     text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil;

// hooks
export const useScrollspy = (ids: string[], offset = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.scrollY;

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: 0, bottom: 0 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - offset);
                    const bottom = clamp(rect.bottom + scroll - offset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));

            setActiveId(position?.id ?? "");
        };

        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
        };
    }, [ids, offset]);

    return activeId;
};