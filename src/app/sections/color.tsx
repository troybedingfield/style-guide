import { colorData } from "../server/data/color"
import "./styles/color.scss"

export default function Color() {
    return (
        <div id="color">





            <div id="section-head">
                <h3>
                    {colorData.map(title => {
                        return title.title;
                    })}
                </h3>
                <hr />
            </div>





            <div id="innerContainer">
                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorData.map(section => {
                            return (
                                section.sections.map(sec => {
                                    if (sec.section === 'primary') {

                                        return (
                                            <>
                                                <h5>{sec.section}</h5>
                                                <h6>{sec.title}</h6>
                                                <p >{sec.body}</p>


                                            </>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>


                    <div id="colors" className="main-content">



                        <section>
                            <div>

                                <div className="color-container">
                                    {colorData.map(section => {
                                        return (section.colors.map(color => {
                                            if (color.type === 'primary') {
                                                return (
                                                    <>
                                                        <div className="color">
                                                            <div className={`color-box bg ${color.class}`}></div>
                                                            <div className="color-text">
                                                                <h4 >{color.hexcode}</h4>
                                                                <h6 >{color.color}</h6>
                                                                <p >{color.use}</p>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                        })
                                        )
                                    })}
                                </div>
                            </div>

                        </section>








                    </div>
                </div>

                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorData.map(section => {
                            return (
                                section.sections.map(sec => {
                                    if (sec.section === 'secondary') {

                                        return (
                                            <>
                                                <h5>{sec.section}</h5>
                                                <h6>{sec.title}</h6>
                                                <p >{sec.body}</p>


                                            </>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>


                    <div id="colors" className="main-content">



                        <section>
                            <div>

                                <div className="color-container">
                                    {colorData.map(section => {
                                        return (section.colors.map(color => {
                                            if (color.type === 'secondary') {
                                                return (
                                                    <>
                                                        <div className="color">
                                                            <div className={`color-box bg ${color.class}`}></div>
                                                            <div className="color-text">
                                                                <h4 >{color.hexcode}</h4>
                                                                <h6 >{color.color}</h6>
                                                                <p >{color.use}</p>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                        })
                                        )
                                    })}
                                </div>
                            </div>

                        </section>








                    </div>
                </div>

                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorData.map(section => {
                            return (
                                section.sections.map(sec => {
                                    if (sec.section === 'support') {

                                        return (
                                            <>
                                                <h5>{sec.section}</h5>
                                                <h6>{sec.title}</h6>
                                                <p >{sec.body}</p>


                                            </>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>


                    <div id="colors" className="main-content">



                        <section>
                            <div>

                                <div className="color-container">
                                    {colorData.map(section => {
                                        return (section.colors.map(color => {
                                            if (color.type === 'support') {
                                                return (
                                                    <>
                                                        <div className="color">
                                                            <div className={`color-box bg ${color.class}`}></div>
                                                            <div className="color-text">
                                                                <h4 >{color.hexcode}</h4>
                                                                <h6 >{color.color}</h6>
                                                                <p >{color.use}</p>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                        })
                                        )
                                    })}
                                </div>
                            </div>

                        </section>








                    </div>
                </div>


                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorData.map(section => {
                            return (
                                section.sections.map(sec => {
                                    if (sec.section === 'neutrals') {

                                        return (
                                            <>
                                                <h5>{sec.section}</h5>
                                                <h6>{sec.title}</h6>
                                                <p >{sec.body}</p>


                                            </>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>


                    <div id="colors" className="main-content">



                        <section>
                            <div>

                                <div className="color-container">
                                    {colorData.map(section => {
                                        return (section.colors.map(color => {
                                            if (color.type === 'neutrals') {
                                                return (
                                                    <>
                                                        <div className="color">
                                                            <div className={`color-box bg ${color.class}`}></div>
                                                            <div className="color-text">
                                                                <h4 >{color.hexcode}</h4>
                                                                <h6 >{color.color}</h6>
                                                                <p >{color.use}</p>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                        })
                                        )
                                    })}
                                </div>
                            </div>

                        </section>








                    </div>
                </div>


                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {colorData.map(section => {
                            return (
                                section.sections.map(sec => {
                                    if (sec.section === 'branding') {
                                        return (
                                            <>
                                                <h5>{sec.section}</h5>
                                                <h6>{sec.title}</h6>
                                                <p >{sec.body}</p>
                                            </>
                                        )
                                    }
                                }
                                )
                            )
                        })}
                    </div>

                    <div id="colors" className="main-content">
                        <section>
                            <div>
                                <div className="color-container">
                                    {colorData.map(section => {
                                        return (section.colors.map(color => {
                                            if (color.type === 'branding') {
                                                return (
                                                    <>
                                                        <div className="color">
                                                            <div className={`color-box bg ${color.class}`}></div>
                                                            <div className="color-text">
                                                                <h4 >{color.hexcode}</h4>
                                                                <h6 >{color.color}</h6>
                                                                <p >{color.use}</p>
                                                            </div>
                                                        </div>


                                                    </>
                                                )
                                            }
                                        })
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>















            </div>


        </div>

    )
}