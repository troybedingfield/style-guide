import "./styles/typography.scss"
import { typographyData } from "../server/data/typography";
import { Fragment } from "react";

export default function Typography({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    const typographyD = typographyData;
    const typographyFilter = typographyD.filter(typo => [query].every(e => typo.meta.includes(e)))
    return (
        <div id="typography">



            {typographyFilter.map((title, index) => {
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

                        {typographyFilter.map(des => {
                            return des.documentation.map((doc, index) => {
                                return (
                                    <Fragment key={index}>
                                        <p>{doc.body}</p>
                                    </Fragment>
                                )
                            });
                        })}

                        {typographyFilter.map(des => {
                            return des.sections.map((sec, index) => {
                                if (sec.section === 'allheights') {

                                    return (
                                        <Fragment key={index}>
                                            <h6 >{sec.title}</h6>
                                            <p >{sec.body}</p>
                                        </Fragment>
                                    )
                                }
                            });
                        })}
                    </div>
                    <div id="typography-inner" className="main-content">
                        <div className="headers-container">
                            {typographyFilter.map(des => {
                                return des.headlines.map((head, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div className="header py-4">
                                                <div className="h-box">
                                                    {head.tag === 'h1' && <h1>{head.head}</h1>}
                                                    {head.tag === 'h2' && <h2>{head.head}</h2>}
                                                    {head.tag === 'h3' && <h3>{head.head}</h3>}
                                                    {head.tag === 'h4' && <h4>{head.head}</h4>}
                                                    {head.tag === 'h5' && <h5>{head.head}</h5>}
                                                    {head.tag === 'h6' && <h6>{head.head}</h6>}
                                                    {head.tag === 'h7' && <h6>{head.head}</h6>}
                                                    {head.tag === 'h8' && <p className="gridCells">{head.head}</p>}
                                                    {head.tag === 'h9' && <p className="smallCopy">{head.head}</p>}
                                                </div>
                                                <hr />
                                                <ul>
                                                    <li>{head.use}</li>
                                                    <li >{head.font}</li>
                                                    <li>{head.weight}</li>
                                                    <li >{head.size}</li>
                                                    <li>{head.color} ({head.hex})
                                                    </li>
                                                </ul>
                                            </div>
                                        </Fragment>
                                    )

                                });
                            })}
                        </div>
                    </div>
                </div>


                <div id="sectionContainer">


                    {typographyFilter.map(des => {
                        return des.sections.map((sec, index) => {
                            if (sec.section === 'frequentlyused') {

                                return (
                                    <Fragment key={index}>
                                        <div id="documentation">
                                            <h6 >{sec.title}</h6>
                                            <p >{sec.body}</p>
                                        </div>
                                    </Fragment>
                                )
                            }
                        });
                    })}

                    <div id="typography-inner" className="main-content">

                        {typographyFilter.map(des => {
                            return des.frequentlyused.map(head => {
                                return (
                                    <div className="py-4">
                                        {head.section1.map((sec, index) => {

                                            return (
                                                <Fragment key={index}>
                                                    {sec.type === "title" && <h5>{sec.body}</h5>}
                                                    {sec.type === "emphasis" && <h6>{sec.body}</h6>}
                                                    {sec.type === "grid" && <h6>{sec.body}</h6>}
                                                    {sec.type === "body" && <p>{sec.body}</p>}
                                                </Fragment>

                                            )

                                        })}
                                    </div>
                                )



                            });
                        })}

                    </div>

                </div>

                <div id="sectionContainer">
                    <div id="documentation">


                    </div>
                    <div id="typography-inner" className="main-content">

                        {typographyFilter.map(des => {
                            return des.frequentlyused.map(head => {
                                return (
                                    <div className="py-4">
                                        {head.section2.map((sec, index) => {

                                            return (
                                                <Fragment key={index}>


                                                    <h3>{sec.title}</h3>
                                                    <h5>{sec.header}</h5>
                                                    <p>{sec.body}</p>


                                                </Fragment>

                                            )

                                        })}
                                    </div>
                                )



                            });
                        })}

                    </div>

                </div>


                <div id="sectionContainer">
                    <div id="documentation">


                    </div>
                    <div id="typography-inner" className="main-content">

                        {typographyFilter.map(des => {
                            return des.frequentlyused.map((two, index) => {


                                return two.section3.map((tw) => {
                                    return (
                                        <Fragment key={index}>
                                            <h4>{tw.title}</h4>
                                        </Fragment>
                                    )
                                })





                            });
                        })}
                        <div className="container grid grid-cols-12 gap-4">
                            {typographyFilter.map(des => {
                                return des.twocolumns.map((two, index) => {


                                    return (
                                        <Fragment key={index}>
                                            <div className="col-span-6">
                                                <h5>{two.headline}</h5>
                                                <p>{two.body}</p>
                                            </div>
                                        </Fragment>

                                    )





                                });
                            })}
                        </div>
                    </div>

                </div>













            </div>







        </div>
    )
}