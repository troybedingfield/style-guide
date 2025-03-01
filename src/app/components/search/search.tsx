'use client';
import "./search.scss"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Suspense } from "react";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    // const { replace } = useRouter();
    const router = useRouter();
    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    function SearchBarFallback() {
        return <>placeholder</>
    }

    return (




        <div className="head-search relative flex flex-1 flex-shrink-0 p-1">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="searchfield peer block w-full rounded-md border border-gray-200 py-[2px] pl-2 text-sm placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>


    );
}