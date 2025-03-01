'use client'
import "./styles/typography.scss"
import { typographyData } from "../server/data/typography";
import { Fragment } from "react";
import useHighlightSearch from "../hooks/useHighlight";

export default function Typography(
    {
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }
) {

    const typographyD = typographyData;
    const typographySections = typographyData[0]?.sections;
    const typographyDoc = typographyData[0]?.documentation;
    const typographyHead = typographyData[0]?.headlines;

    const typographyFilter = typographyD.filter(typo => [query].every(e => typo.meta.includes(e)))

    const highlightedMainTitle = useHighlightSearch(typographyData, query, 'title');
    const highlightedDovBody = useHighlightSearch(typographyDoc, query, 'body');
    const highlightedSectionTitle = useHighlightSearch(typographySections, query, 'title');
    const highlightedHead = useHighlightSearch(typographyHead, query, 'head');
    const highlightedHeadUse = useHighlightSearch(typographyHead, query, 'use');
    const highlightedHeadFont = useHighlightSearch(typographyHead, query, 'font');
    const highlightedHeadWeight = useHighlightSearch(typographyHead, query, 'weight');
    const highlightedHeadSize = useHighlightSearch(typographyHead, query, 'size');
    const highlightedHeadColor = useHighlightSearch(typographyHead, query, 'color');
    const highlightedHeadHex = useHighlightSearch(typographyHead, query, 'hex');

    return (
        <div id="typography">



            {/* {typographyFilter.map((title, index) => {
                return (
                    <Fragment key={index}>
                        <div id="section-head" className="py-4">
                            <h3>{title.title}</h3>
                            <hr />
                        </div>
                    </Fragment>
                );
            })} */}
            {highlightedMainTitle.map((item, index) => (
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

                <div id="sectionContainer">
                    <div id="documentation">

                        {/* {typographyFilter.map(des => {
                            return des.documentation.map((doc, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="py-4">
                                            <p>{doc.body}</p>
                                        </div>
                                    </Fragment>
                                )
                            });
                        })}

                        {typographyFilter.map(des => {
                            return des.sections.map((sec, index) => {
                                if (sec.section === 'allheights') {

                                    return (
                                        <Fragment key={index}>
                                            <div className="py-4">
                                                <h6 >{sec.title}</h6>
                                                <p >{sec.body}</p>
                                            </div>
                                        </Fragment>
                                    )
                                }
                            });
                        })} */}


                        {highlightedDovBody.map((item, index) => (
                            <Fragment key={index}>

                                <p className="pb-6">
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
                        {highlightedSectionTitle.map((item, index) => (
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
                    </div>
                    <div id="typography-inner" className="main-content">
                        <div className="headers-container">
                            {/* {typographyFilter.map(des => {
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
                            })} */}
                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 0 &&
                                            <>
                                                <div className="h-box">
                                                    <h1>
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </h1>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 0 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 1 &&
                                            <>
                                                <div className="h-box">
                                                    <h2>
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </h2>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 1 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 2 &&
                                            <>
                                                <div className="h-box">
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
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 2 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 3 &&
                                            <>
                                                <div className="h-box">
                                                    <h4>
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </h4>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 3 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 4 &&
                                            <>
                                                <div className="h-box">
                                                    <h5>
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </h5>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 4 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 5 &&
                                            <>
                                                <div className="h-box">
                                                    <h6>
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </h6>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 5 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 6 &&
                                            <>
                                                <div className="h-box">
                                                    <p className="gridCells">
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 6 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 7 &&
                                            <>
                                                <div className="h-box">
                                                    <p className="gridCells">
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 7 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>

                            <div className="header py-4">
                                {highlightedHead.map((item, index) => (
                                    <Fragment key={index}>
                                        {index === 8 &&
                                            <>
                                                <div className="h-box">
                                                    <p className="smallCopy">
                                                        {item.parts.map((part, partIndex) => (
                                                            <span
                                                                key={partIndex}
                                                                style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                            >
                                                                {part.text}
                                                            </span>
                                                        ))}
                                                    </p>
                                                </div>
                                                <hr />
                                            </>
                                        }
                                    </Fragment>
                                ))}

                                <ul>
                                    {highlightedHeadUse.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadFont.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadWeight.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadSize.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadColor.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            {part.text}
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                    {highlightedHeadHex.map((item, index) => (
                                        <Fragment key={index}>
                                            {index === 8 &&
                                                <li>
                                                    {item.parts.map((part, partIndex) => (
                                                        <span
                                                            key={partIndex}
                                                            style={{ backgroundColor: part.highlighted ? 'yellow' : 'transparent' }}
                                                        >
                                                            ({part.text})
                                                        </span>
                                                    ))}
                                                </li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </div>
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
                                            <div className="py-4">
                                                <h6 >{sec.title}</h6>
                                                <p >{sec.body}</p>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            }
                        });
                    })}

                    <div id="typography-inner" className="main-content">

                        {typographyFilter.map(des => {
                            return des.frequentlyused.map((head, index) => {
                                return (
                                    <div key={index} className="py-4">
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
                            return des.frequentlyused.map((head, index) => {
                                return (
                                    <div key={index} className="py-4">
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