'use client'
import { Fragment, RefObject, useRef } from "react";
import { colorData } from "../server/data/color"
import "./styles/color.scss"
import useHighlightSearch from "../hooks/useHighlight";




export default function Color(
    {
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }
) {
    const colorD = colorData;
    const colorSections = colorData[0]?.sections;
    const colorColors = colorData[0]?.colors;
    const colorFilter = colorD.filter(color => [query].every(e => color.meta.includes(e)))

    const highlightedTitle = useHighlightSearch(colorData, query, 'title');

    const highlightedSectionsTitle = useHighlightSearch(colorSections, query, 'title');
    const highlightedSectionsBody = useHighlightSearch(colorSections, query, 'body');

    const highlightedColorsClass = useHighlightSearch(colorColors, query, 'class');
    const highlightedColorsHex = useHighlightSearch(colorColors, query, 'hexcode');
    const highlightedColorsColor = useHighlightSearch(colorColors, query, 'color');
    const highlightedColorsUse = useHighlightSearch(colorColors, query, 'use');

    return (
        <div id="color">







            {/* {colorFilter.map((title, index) => {
                return (
                    <Fragment key={index}>
                        <div id="section-head" className="py-4">
                            <h3>{title.title}</h3>

                            <hr />
                        </div>
                    </Fragment>
                );
            })} */}


            {highlightedTitle.map((item, index) => (
                <div id="section-head" key={index} className="py-4">
                    <h3>
                        {item.parts.map((part, partIndex) => (
                            <span
                                key={partIndex}
                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                            >
                                {part.text}
                            </span>
                        ))}
                    </h3>
                    <hr />
                </div>
            ))}











            <div id="innerContainer">
                <div id="sectionContainer" className="flex">
                    <div id="documentation">


                        {highlightedSectionsTitle.map((item, index) => (
                            <Fragment key={index}>

                                <h5>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 0) {

                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }



                                    })}
                                </h5>
                            </Fragment>
                        ))}
                        {highlightedSectionsBody.map((item, index) => (
                            <Fragment key={index}>
                                <p>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 0) {
                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }

                                    })}
                                </p>
                            </Fragment>
                        ))}


                        {highlightedSectionsTitle.map((item, index) => (
                            <Fragment key={index}>

                                <h5>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 1) {

                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }



                                    })}
                                </h5>
                            </Fragment>
                        ))}
                        {highlightedSectionsBody.map((item, index) => (
                            <Fragment key={index}>
                                <p>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 1) {
                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }

                                    })}
                                </p>
                            </Fragment>
                        ))}


                        {/* {colorFilter.map(section => {
                            return (
                                section.sections.map((sec, index) => {
                                    if (sec.section === 'primary') {

                                        return (
                                            <Fragment key={index}>


                                                <div className="py-4">
                                                    <h5>{sec.title}</h5>

                                                    <p>{sec.body}</p>
                                                </div>


                                            </Fragment>
                                        )
                                    }
                                    if (sec.section === 'example') {

                                        return (
                                            <Fragment key={index}>

                                                <div className="py-4">
                                                    <h5 >{sec.title}</h5>
                                                    <p style={{ whiteSpace: 'pre-line' }}>{sec.body}</p>
                                                </div>

                                            </Fragment>
                                        )
                                    }
                                }
                                )
                            )
                        })} */}
                    </div>

                    <div id="colors">
                        <div className="color-container">

                            {/* {colorFilter.map(section => {
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
                            })} */}


                            <div className="color-container">
                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 0) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}

                                    <div className="color-text">

                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>
                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>
                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>
                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>
                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>
                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 0) {
                                                        return (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>
                                        ))}
                                    </div>
                                </div>





                                <div className="color">

                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 1) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 1) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 1) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 1) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>





                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 2) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 2) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 2) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 2) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>




                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 3) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 3) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 3) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 3) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>


                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 4) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 4) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 4) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 4) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>


                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 5) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 5) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 5) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 5) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>


                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 6) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 6) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 6) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 6) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>
                                </div>


                                <div className="color">
                                    {highlightedColorsClass.map((item, index) => (
                                        <Fragment key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 7) {
                                                    return (
                                                        <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                        // <span
                                                        //     key={partIndex}
                                                        //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        // >
                                                        //     {part.text}
                                                        // </span>
                                                    )
                                                }
                                            })}
                                        </Fragment>

                                    ))}
                                    <div className="color-text">
                                        {highlightedColorsHex.map((item, index) => (
                                            <h4 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 7) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h4>

                                        ))}
                                        {highlightedColorsColor.map((item, index) => (
                                            <h6 key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 7) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </h6>

                                        ))}
                                        {highlightedColorsUse.map((item, index) => (
                                            <p key={index}>

                                                {item.parts.map((part, partIndex) => {
                                                    if (index === 7) {
                                                        return (

                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        )
                                                    }
                                                })}
                                            </p>

                                        ))}
                                    </div>

                                </div>








                            </div>

                        </div>
                    </div>
                </div>

                <div id="sectionContainer" className="flex">
                    <div id="documentation">
                        {/* {colorFilter.map(section => {
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
                        })} */}

                        {highlightedSectionsTitle.map((item, index) => (
                            <Fragment key={index}>

                                <h5>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 2) {

                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }



                                    })}
                                </h5>
                            </Fragment>
                        ))}
                        {highlightedSectionsBody.map((item, index) => (
                            <Fragment key={index}>
                                <p>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 2) {
                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }

                                    })}
                                </p>
                            </Fragment>
                        ))}

                    </div>


                    <div id="colors" className="main-content">


                        <div className="color-container">

                            {/* {colorFilter.map(section => {
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
                            })} */}

                        </div>

                        <div className="color-container">
                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 8) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 8) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 8) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 8) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>





                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 9) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 9) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 9) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 9) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>





                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 10) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 10) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 10) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 10) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>




                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 11) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 11) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 11) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 11) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>


                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 12) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 12) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 12) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 12) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>


                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 13) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 13) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 13) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 13) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>


                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 14) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 14) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 14) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 14) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>


                            <div className="color">
                                {highlightedColorsClass.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 15) {
                                                return (
                                                    <div key={partIndex} className={`color-box bg ${part.text}`}></div>
                                                    // <span
                                                    //     key={partIndex}
                                                    //     style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                    // >
                                                    //     {part.text}
                                                    // </span>
                                                )
                                            }
                                        })}
                                    </Fragment>

                                ))}
                                <div className="color-text">
                                    {highlightedColorsHex.map((item, index) => (
                                        <h4 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 15) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h4>

                                    ))}
                                    {highlightedColorsColor.map((item, index) => (
                                        <h6 key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 15) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </h6>

                                    ))}
                                    {highlightedColorsUse.map((item, index) => (
                                        <p key={index}>

                                            {item.parts.map((part, partIndex) => {
                                                if (index === 15) {
                                                    return (

                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    )
                                                }
                                            })}
                                        </p>

                                    ))}
                                </div>
                            </div>









                        </div>





                    </div>
                </div>

                <div id="sectionContainer" className="flex">

                    {/* {colorFilter.map(section => {
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
                    })} */}
                    <div id="documentation" >

                        {highlightedSectionsTitle.map((item, index) => (
                            <Fragment key={index}>

                                <h5>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 3) {

                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }



                                    })}
                                </h5>
                            </Fragment>
                        ))}

                        {highlightedSectionsBody.map((item, index) => (
                            <Fragment key={index}>
                                <p>
                                    {item.parts.map((part, partIndex) => {
                                        if (index === 3) {
                                            return (

                                                <span
                                                    key={partIndex}
                                                    style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent', whiteSpace: 'pre-line' }}
                                                >
                                                    {part.text}
                                                </span>

                                            )
                                        }

                                    })}
                                </p>
                            </Fragment>
                        ))}

                    </div>


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


        </div >

    )
}