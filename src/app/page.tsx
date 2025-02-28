import Link from "next/link";
import Menu from "./components/menu/menu";
import StyleGuideCotent from "./style-guide-content";
import { Suspense } from "react";

export default async function HomePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div id="container">
      <div id="nav-container">

        <Menu />

      </div>
      <div className="main-content-area">
        <div className="p-4">
          <Suspense key={query + currentPage} fallback={'Searching...'}>
            <StyleGuideCotent query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
    </div>

  );
}
