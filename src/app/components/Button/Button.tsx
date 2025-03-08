'use client';

import React from 'react';
import './Button.scss'

type buttonTypes = {
    children: React.ReactNode,
    color?: string,
    type?: "submit" | "reset" | "button" | undefined,
    disabled?: boolean,
    fill?: string,
    size?: string,
    uppercase?: boolean,
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: number,
    minHeight?: number,
    customBGColor?: string,
    buttonClick?: React.MouseEventHandler<HTMLButtonElement>,
    formAction?: string,
    className?: string,
}

export default function Button({ ...props }: buttonTypes) {
    const {
        children,
        color = 'default',
        disabled,
        fill = 'solid',
        size = 'medium',
        uppercase,
        maxWidth,
        minWidth,
        customBGColor,
        buttonClick,
        formAction,
        className,
        minHeight,
        type
    } = props

    return (
        <button
            type={type}
            style={{
                ...(minWidth && { minWidth: minWidth + 'px' }),
                ...(maxWidth && { maxWidth: maxWidth + 'px' }),
                ...(minHeight && { minHeight: minHeight + 'px' }),
                ...(customBGColor && { backgroundColor: customBGColor })
            }}
            className={[color, fill, size, uppercase ? 'text-uppercase' : '', className].join(' ')}
            onClick={buttonClick}
            formAction={formAction}
            disabled={disabled ?? disabled}>{children}
        </button>
    )
}