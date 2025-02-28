import { Fragment } from "react";
import { colorData } from "../server/data/color"
import "./styles/color.scss"

export default function Color({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const colorD = colorData;
    const colorFilter = colorD.filter(color => [query].every(e => color.meta.includes(e)))
    return (
        <div id="color">







            {colorFilter.map((title, index) => {
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
                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorFilter.map(section => {
                            return (
                                section.sections.map((sec, index) => {
                                    if (sec.section === 'primary') {

                                        return (
                                            <Fragment key={index}>


                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>
                                                    <p >{sec.body}</p>
                                                </div>


                                            </Fragment>
                                        )
                                    }
                                    if (sec.section === 'example') {

                                        return (
                                            <Fragment key={index}>

                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>
                                                    <p style={{ whiteSpace: 'pre-line' }}>{sec.body}</p>
                                                </div>

                                            </Fragment>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>



                    <div id="colors" className="main-content">


                        <div className="color-container">

                            {colorFilter.map(section => {
                                return (section.colors.map((color, index) => {
                                    if (color.type === 'primary') {
                                        return (
                                            <Fragment key={index}>



                                                <div className="color py-4">
                                                    <div className={`color-box bg ${color.class}`}></div>
                                                    <div className="color-text">
                                                        <h4 >{color.hexcode}</h4>
                                                        <h6 >{color.color}</h6>
                                                        <p style={{ whiteSpace: 'pre-line' }}>{color.use}</p>
                                                    </div>
                                                </div>




                                            </Fragment>
                                        )
                                    }
                                })
                                )
                            })}


                        </div>






                    </div>
                </div>

                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorFilter.map(section => {
                            return (
                                section.sections.map((sec, index) => {
                                    if (sec.section === 'secondary') {

                                        return (
                                            <Fragment key={index}>
                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>
                                                    <p >{sec.body}</p>
                                                </div>

                                            </Fragment>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>


                    <div id="colors" className="main-content">


                        <div className="color-container">

                            {colorFilter.map(section => {
                                return (section.colors.map((color, index) => {
                                    if (color.type === 'secondary') {
                                        return (
                                            <Fragment key={index}>




                                                <div className="color py-4">
                                                    <div className={`color-box bg ${color.class}`}></div>
                                                    <div className="color-text">
                                                        <h4 >{color.hexcode}</h4>
                                                        <h6 >{color.color}</h6>
                                                        <p >{color.use}</p>
                                                    </div>
                                                </div>





                                            </Fragment>
                                        )
                                    }
                                })
                                )
                            })}

                        </div>







                    </div>
                </div>

                <div id="sectionContainer" className="flex">

                    {colorFilter.map(section => {
                        return (
                            section.sections.map((sec, index) => {
                                if (sec.section === 'support') {

                                    return (
                                        <Fragment key={index}>
                                            <div id="documentation" >
                                                <div className="py-4">

                                                    <h5>{sec.title}</h5>
                                                    <p >{sec.body}</p>
                                                </div>

                                            </div>
                                        </Fragment>
                                    )
                                }
                            }
                            )
                        )
                    })}



                    <div id="colors" className="main-content">


                        <div className="color-container">

                            {colorFilter.map(section => {
                                return (section.colors.map((color, index) => {
                                    if (color.type === 'support') {
                                        return (
                                            <Fragment key={index}>




                                                <div className="color py-4">
                                                    <div className={`color-box bg ${color.class}`}></div>
                                                    <div className="color-text">
                                                        <h4 >{color.hexcode}</h4>
                                                        <h6 >{color.color}</h6>
                                                        <p >{color.use}</p>
                                                    </div>
                                                </div>





                                            </Fragment>
                                        )
                                    }
                                })
                                )
                            })}
                        </div>








                    </div>
                </div>


                <div id="sectionContainer" className="flex">

                    {colorFilter.map(section => {
                        return (
                            section.sections.map((sec, index) => {
                                if (sec.section === 'neutrals') {

                                    return (
                                        <Fragment key={index}>
                                            <div id="documentation" >

                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>
                                                    <p >{sec.body}</p>
                                                </div>
                                            </div>

                                        </Fragment>
                                    )
                                }
                            }
                            )
                        )
                    })}



                    <div id="colors" className="main-content">


                        <div className="color-container">

                            {colorFilter.map(section => {
                                return (section.colors.map((color, index) => {
                                    if (color.type === 'neutrals') {
                                        return (
                                            <Fragment key={index}>




                                                <div className="color py-4">
                                                    <div className={`color-box bg ${color.class}`}></div>
                                                    <div className="color-text">
                                                        <h4 >{color.hexcode}</h4>
                                                        <h6 >{color.color}</h6>
                                                        <p >{color.use}</p>
                                                    </div>
                                                </div>





                                            </Fragment>
                                        )
                                    }
                                })
                                )
                            })}
                        </div>








                    </div>
                </div>


                <div id="sectionContainer" className="flex">

                    {colorFilter.map(section => {
                        return (
                            section.sections.map((sec, index) => {
                                if (sec.section === 'branding') {
                                    return (
                                        <Fragment key={index}>
                                            <div id="documentation" >

                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>
                                                    <p >{sec.body}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    )
                                }
                            }
                            )
                        )
                    })}


                    <div id="colors" className="main-content">
                        <div className="color-container">
                            {colorFilter.map(section => {
                                return (section.colors.map((color, index) => {
                                    if (color.type === 'branding') {
                                        return (
                                            <Fragment key={index}>



                                                <div className="color py-4">
                                                    <div className={`color-box bg ${color.class}`}></div>
                                                    <div className="color-text">
                                                        <h4 >{color.hexcode}</h4>
                                                        <h6 >{color.color}</h6>
                                                        <p >{color.use}</p>
                                                    </div>
                                                </div>




                                            </Fragment>
                                        )
                                    }
                                })
                                )
                            })}

                        </div>
                    </div>
                </div>














            </div>


        </div>

    )
}