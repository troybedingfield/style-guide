import "./menu.scss"
import Link from "next/link";
import { menuData } from "~/app/server/data/menu";


export default function Menu() {

    // function clearSearch() {

    // }
    // function onFormSubmit() {

    // }


    return (
        <>

            <div className="nav">
                <div className="nav-head">

                    <div className="head-text">
                        <h5>UX StyleGuide</h5>
                    </div>
                    <div className="head-search">
                        <form >
                            <input

                                type="text"
                                placeholder="Search"
                                name="search"
                                className="searchfield"


                            />

                        </form>
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
                        return <Link key={index} id="menuItem" href={menu.link} >{menu.name}</Link>
                    })}
                </nav>
            </div>



        </>
    )
}