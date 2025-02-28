'use client'
import "./menu.scss"
import Link from "next/link";
import { useScrollspy } from "~/app/hooks/usescrollspy";
import { menuData } from "~/app/server/data/menu";
import Search from "../search/search";


export default function Menu() {

    const ids = menuData.map(id => {
        return id.name;
    });
    const activeId = useScrollspy(ids, 64); // 54 is navigation height


    return (
        <>

            <div className="nav">
                <div className="nav-head">

                    <div className="head-text">
                        <h5>UX StyleGuide</h5>
                    </div>
                    <div className="head-search">
                        {/* <form >
                            <input

                                type="text"
                                placeholder="Search"
                                name="search"
                                className="searchfield"


                            />

                        </form> */}
                        <Search placeholder={"Search..."} />
                        <div id="desktop-clear" className="hide">
                            <div
                                id="closeIconDesktop"
                                className="open">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    {menuData.map((menu: any, index: number) => {
                        return <Link key={index} id="menuItem" href={menu.link} className={menu.name === activeId ? "column active" : ''}>{menu.name}</Link>
                    })}
                </nav>
            </div>



        </>
    )
}


