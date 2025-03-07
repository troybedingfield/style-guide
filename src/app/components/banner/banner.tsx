'use client'
import { ReactNode, useState } from 'react'
import './banner.scss'

export default function Banner(props: {
    children: ReactNode
    type?: "info" | "success" | "error" | 'warning' | undefined
    bannerStyle?: "single" | "multi" | undefined
    multiItems?: Array<string> | undefined
    open?: boolean
}) {

    const {
        children,
        type = 'info',
        bannerStyle = 'single',
        multiItems,
        open = false,
    } = props


    const [isOpen, setisOpen] = useState(open)

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

                                <span className='flex gap-2'>
                                    {isOpen &&
                                        <span className='flex rotate-90'>
                                            {`>`}
                                        </span>
                                    }
                                    {!isOpen &&
                                        <>
                                            {`>`}
                                        </>
                                    }
                                    <b>{children}</b>
                                </span>

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