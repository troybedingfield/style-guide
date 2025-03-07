'use client'
import { ReactNode, useState } from 'react'
import './banner.scss'

export default function Banner(props: {
    children: ReactNode
    type?: "info" | "success" | "error" | 'warning' | undefined
    bannerStyle?: "single" | "multi" | undefined
    multiItems?: Array<string> | undefined
}) {

    const {
        children,
        type = 'info',
        bannerStyle = 'single',
        multiItems
    } = props

    const [bannerType, setBannerType] = useState(type)
    const [isOpen, setisOpen] = useState(false)

    function handleBannerOpen() {
        setisOpen(isOpen => !isOpen)
    }

    return (
        <>
            {bannerStyle === "single" &&
                <div className={[`banner`, `banner-${type ?? ''}`].join(' ')}>
                    <div className="content-section ">
                        {children}
                    </div>
                </div>
            }
            {bannerStyle === "multi" &&
                <div className={[`banner`, `banner-${type ?? ''}`].join(' ')}>
                    <div className="content-section">
                        <div className="detail-header cursor-pointer" onClick={handleBannerOpen}>
                            <span className="clickable"

                            >

                                <b>{children}</b>

                            </span>
                        </div>
                        {isOpen &&
                            <ul className='multi-messages'>
                                {multiItems?.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        }
                    </div>
                </div>
            }

        </>
    )

}