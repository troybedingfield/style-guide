'use client'
import './styles/banners.scss'
import Banner from "../components/banner/banner";
import useHighlightSearch from "../hooks/useHighlight";
import { bannersData } from "../server/data/banners";
import { Fragment } from 'react';
import ToastTest from '../components/NewToast/toasttest';

export default function Banners(props: {
    query: string,
    currentPage: number
}) {
    const { query, currentPage } = props

    const bannersD = bannersData;
    const bannersSections = bannersData[0]?.sections;
    const bannersColors = bannersData[0]?.colors;
    const bannersToasts = bannersData[0]?.toast;

    const highlightedMainTitle = useHighlightSearch(bannersData, query, 'title');
    const highlightedSectionBody = useHighlightSearch(bannersSections, query, 'body');
    const highlightedSectionTitle = useHighlightSearch(bannersSections, query, 'title');

    const highlitedColorsTitle = useHighlightSearch(bannersColors, query, 'color');
    const highlitedColorsColor1 = useHighlightSearch(bannersColors, query, 'color1');
    const highlitedColorsCopy1 = useHighlightSearch(bannersColors, query, 'copy1');
    const highlitedColorsColor2 = useHighlightSearch(bannersColors, query, 'color2');
    const highlitedColorsCopy2 = useHighlightSearch(bannersColors, query, 'copy2');
    const highlitedColorsColor3 = useHighlightSearch(bannersColors, query, 'color3');
    const highlitedColorsCopy3 = useHighlightSearch(bannersColors, query, 'copy3');

    const highlitedStoastsTitle = useHighlightSearch(bannersToasts, query, 'Title');


    return (






        <div id="banners">

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

            <div id="innerContainer" className='flex flex-col gap-6'>

                <div id="sectionContainer">
                    <div id="documentation">

                        <h5>
                            {highlightedSectionTitle.map((item, index) => (
                                <Fragment key={index}>

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
                                </Fragment>
                            ))}
                        </h5>
                        <p className="pb-6">
                            {highlightedSectionBody.map((item, index) => (
                                <Fragment key={index}>

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
                                </Fragment>
                            ))}
                        </p>
                    </div>

                    <div id="banners-inner" className="main-content gap-4">
                        <Banner>This is an informational banner</Banner>
                        <Banner type="success">This is an success banner</Banner>
                        <Banner type="warning">This is an warning banner</Banner>
                        <Banner type="error">This is an error banner</Banner>

                    </div>
                </div>
                <div id="sectionContainer">
                    <div id="documentation">

                        <div>
                            <h5>
                                {highlitedColorsTitle.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </h5>
                            <p >
                                {highlitedColorsCopy1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <div className='right flex'>
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 0) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 0) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 0) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div id="banners-inner" className="main-content gap-4">

                        <Banner bannerStyle="multi" multiItems={['test', 'test']}>Title</Banner>
                        <Banner bannerStyle="multi" open={true} multiItems={['test', 'test']}>Title</Banner>
                    </div>
                </div>
                <div id="sectionContainer">
                    <div id="documentation">


                        <div>
                            <h5>
                                {highlitedColorsTitle.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </h5>
                            <p >
                                {highlitedColorsCopy1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <div className='right flex'>
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 1) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 1) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 1) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div id="banners-inner" className="main-content gap-4">

                        <Banner bannerStyle="multi" type='success' multiItems={['test', 'test']}>Title</Banner>
                        <Banner bannerStyle="multi" open={true} type='success' multiItems={['test', 'test']}>Title</Banner>
                    </div>
                </div>
                <div id="sectionContainer">
                    <div id="documentation">


                        <div>
                            <h5>
                                {highlitedColorsTitle.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </h5>
                            <p >
                                {highlitedColorsCopy1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <div className='right flex'>
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 2) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 2) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 2) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div id="banners-inner" className="main-content gap-4">

                        <Banner bannerStyle="multi" type='warning' multiItems={['test', 'test']}>Title</Banner>
                        <Banner bannerStyle="multi" open={true} type='warning' multiItems={['test', 'test']}>Title</Banner>
                    </div>
                </div>
                <div id="sectionContainer">
                    <div id="documentation">


                        <div>
                            <h5>
                                {highlitedColorsTitle.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </h5>
                            <p >
                                {highlitedColorsCopy1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <p >
                                {highlitedColorsCopy3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
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
                                    </Fragment>
                                ))}
                            </p>
                            <div className='right flex'>
                                {highlitedColorsColor1.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 3) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor2.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 3) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                                {highlitedColorsColor3.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.parts.map((part, partIndex) => {
                                            if (index === 3) {
                                                return (
                                                    <div className='color'
                                                        key={partIndex}
                                                        style={{ backgroundColor: part.text }}>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div id="banners-inner" className="main-content gap-4">

                        <Banner bannerStyle="multi" type='error' multiItems={['test', 'test']}>Title</Banner>
                        <Banner bannerStyle="multi" open={true} type='error' multiItems={['test', 'test']}>Title</Banner>
                    </div>
                </div>
                <div id="sectionContainer">
                    <div id="documentation">


                        <div>
                            <h5>
                                {highlightedSectionTitle.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 6) {

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
                                    </Fragment>
                                ))}
                            </h5>
                            <p className="pb-6">
                                {highlightedSectionBody.map((item, index) => (
                                    <Fragment key={index}>

                                        {item.parts.map((part, partIndex) => {
                                            if (index === 6) {

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
                                    </Fragment>
                                ))}
                            </p>

                        </div>
                    </div>

                    <div id="banners-inner" className="main-content gap-4">

                        <ToastTest />
                    </div>
                </div>


            </div>



        </div>
    )
}