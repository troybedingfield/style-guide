import { Fragment } from "react";
import { iconsData } from "../server/data/icons";
import './styles/icons.scss'

export default function Icons({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const iconsD = iconsData;
    const iconsFilter = iconsD.filter(ico => [query].every(e => ico.meta.includes(e)))
    return (
        <div id="icons">




            {iconsFilter.map((title, index) => {
                return (
                    <Fragment key={index}>
                        <div id="section-head" className="py-4">
                            <h3>{title.title}</h3>
                            <hr />
                        </div>
                    </Fragment>
                );
            })}







            <div id="innerContainer">
                <div id="sectionContainer">
                    <div id="documentation">



                        {iconsFilter.map(section => {
                            return (
                                section.documentation.map((doc, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <h6 >{doc.title}</h6>
                                            <p >{doc.body}</p>
                                        </Fragment>
                                    )
                                }
                                )
                            )
                        })}










                    </div>

                    <div id="icon" className="main-content">



                        {iconsFilter.map(section => {
                            return (
                                section.newicons.map(newicons => {
                                    return (
                                        newicons.title.map((title, index) => {
                                            return <h4 key={index}>{title.title}</h4>
                                        })
                                    )
                                }
                                )
                            )
                        })}




                        <div className="mostUsed">

                            <div className="icon-wrap flex flex-row gap-4">
                                {iconsFilter.map(section => {
                                    return (
                                        section.newicons.map(newicons => {
                                            return (
                                                newicons.icons.map((icon, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <div className="flex flex-col">
                                                                <i className={icon.icon}></i>
                                                                <span>{icon.name}</span>
                                                            </div>
                                                        </Fragment>
                                                    )
                                                })
                                            )
                                        }
                                        )
                                    )
                                })}
                            </div>




                        </div>



                        {iconsFilter.map(section => {
                            return (
                                section.mostused.map(most => {
                                    return (
                                        most.title.map((title, index) => {
                                            return <h4 key={index}>{title.title}</h4>
                                        })
                                    )
                                }
                                )
                            )
                        })}

                        <div className="mostUsed">


                            <div className="icon-wrap flex">
                                {iconsFilter.map(section => {
                                    return (
                                        section.mostused.map(most => {
                                            return (
                                                most.icons.map((icon, index) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <div className="flex flex-col">
                                                                <i className={icon.icon}></i>
                                                                <span>{icon.name}</span>
                                                            </div>
                                                        </Fragment>
                                                    )
                                                })
                                            )
                                        }
                                        )
                                    )
                                })}
                            </div>

                        </div>



                        <section>
                            {iconsFilter.map(section => {
                                return (
                                    section.outliers.map(outlie => {
                                        return (
                                            outlie.title.map((title, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <h4>{title.title}</h4>
                                                        <p className="preWrap">{title.body}</p>
                                                    </Fragment>
                                                )
                                            })
                                        )
                                    }
                                    )
                                )
                            })}



                            <div className="mostUsed">

                                <div className="icon-wrap flex">
                                    {iconsFilter.map(section => {
                                        return (
                                            section.outliers.map(outlie => {
                                                return (
                                                    outlie.icons.map((icon, index) => {
                                                        return (
                                                            <Fragment key={index}>
                                                                <div className="flex flex-col align-items-center">
                                                                    <i className={icon.icon + ' ' + icon.class}></i>
                                                                    <span>{icon.name}</span>
                                                                </div>
                                                            </Fragment>
                                                        )
                                                    })
                                                )
                                            }
                                            )
                                        )
                                    })}
                                </div>




                            </div>

                        </section>





                        <section>

                            {iconsFilter.map((section, index) => {
                                return (

                                    <h4 key={index}>{section.allicons}</h4>

                                )

                            })}




                            <div  >

                                {iconsFilter.map(section => {
                                    return (
                                        section.icons.map(icon => {
                                            return (
                                                <div className="icon" key={icon.id}>
                                                    <i className={icon.icon}></i>
                                                    <h5>{icon.name}</h5>
                                                    <p className="smallCopy">HTML:</p>
                                                    <pre>{icon.code1}</pre>
                                                    <p className="smallCopy">CSS:</p>
                                                    <pre>content:"{icon.code2}";</pre>
                                                </div>
                                            )

                                        }
                                        )
                                    )
                                })}

                                <i ></i>

                                {/* <h5 >{{ item.name }}</h5>
                                <p className="smallCopy">HTML:</p>
                                <pre>{{ item.code1 }}</pre>
                                <p className="smallCopy">CSS:</p>
                                <pre>content:"{{ item.code2 }}";</pre> */}
                            </div>




                        </section >

                    </div>











                </div>



            </div>

        </div>
    )
}