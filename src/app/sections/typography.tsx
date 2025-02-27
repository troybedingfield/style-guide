import "./styles/typography.scss"
import { typographyData } from "../server/data/typography";

export default function Typography() {
    return (
        <div id="typography">


            <div id="section-head">
                {typographyData.map(title => {
                    return title.title;
                })}
                <hr />
            </div>




            <div id="innerContainer">

                <div id="sectionContainer">
                    <div id="documentation">

                        {typographyData.map(des => {
                            return des.documentation.map(doc => {
                                return <p >{doc.body}</p>
                            });
                        })}

                        {typographyData.map(des => {
                            return des.sections.map(sec => {
                                if (sec.section === 'allheights') {

                                    return (
                                        <>

                                            <h6 >{sec.title}</h6>
                                            <p >{sec.body}</p>
                                        </>
                                    )
                                }
                            });
                        })}
                    </div>
                    <div id="typography" className="main-content">
                        <div className="headers-container">
                            {typographyData.map(des => {
                                return des.headlines.map(head => {
                                    return (
                                        <>
                                            <div className="header">
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
                                        </>
                                    )

                                });
                            })}
                        </div>
                    </div>
                </div>


                <div id="sectionContainer">
                    <div id="documentation">

                        {typographyData.map(des => {
                            return des.sections.map(sec => {
                                if (sec.section === 'frequentlyused') {

                                    return (
                                        <>

                                            <h6 >{sec.title}</h6>
                                            <p >{sec.body}</p>
                                        </>
                                    )
                                }
                            });
                        })}
                    </div>
                    <div id="typography" className="main-content">
                        <section>
                            {typographyData.map(des => {
                                return des.frequentlyused.map(head => {
                                    return head.section1.map(sec => {

                                        return (
                                            <>
                                                {sec.type === "title" && <h5>{sec.body}</h5>}
                                                {sec.type === "emphasis" && <h6>{sec.body}</h6>}
                                                {sec.type === "grid" && <h6>{sec.body}</h6>}
                                                {sec.type === "body" && <p>{sec.body}</p>}
                                            </>

                                        )

                                    })



                                });
                            })}
                        </section>
                    </div>

                </div>

                <div id="sectionContainer">
                    <div id="documentation">


                    </div>
                    <div id="typography" className="main-content">
                        <section>
                            {typographyData.map(des => {
                                return des.frequentlyused.map(head => {
                                    return head.section2.map(sec => {

                                        return (
                                            <>
                                                <h3>{sec.title}</h3>
                                                <h5>{sec.header}</h5>
                                                <p>{sec.body}</p>
                                            </>

                                        )

                                    })



                                });
                            })}
                        </section>
                    </div>

                </div>


                <div id="sectionContainer">
                    <div id="documentation">


                    </div>
                    <div id="typography" className="main-content">
                        <section>
                            {typographyData.map(des => {
                                return des.twocolumns.map(two => {


                                    return (
                                        <>

                                            <h5>{two.headline}</h5>
                                            <p>{two.body}</p>
                                        </>

                                    )





                                });
                            })}
                        </section>
                    </div>

                </div>













            </div>







        </div>
    )
}