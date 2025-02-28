import { Suspense } from "react";
import Color from "./sections/color";
import Columns from "./sections/columns";
import Icons from "./sections/icons";
import Typography from "./sections/typography";

export default async function StyleGuideCotent({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    return (
        <>
            <Color query={query} currentPage={currentPage} />
            <Typography query={query} currentPage={currentPage} />
            <Columns query={query} currentPage={currentPage} />
            <Icons query={query} currentPage={currentPage} />
        </>
    )
}