'use client'
import React, { useCallback, useEffect, useRef } from 'react';
import { useToast } from '~/app/_context/ToastContextNew';
import "./Toast.scss"

const ToastComponent: React.FC = () => {
    const { toasts, removeToast } = useToast();

    const timerID = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleDismiss = useCallback((id: string | undefined) => {
        removeToast(id ?? '');
    }, [removeToast]);

    useEffect(() => {
        timerID.current = setTimeout(() => {
            return handleDismiss(toasts[0]?.id);
        }, 3000);

        return () => {
            if (timerID.current) {
                clearTimeout(timerID.current);
            }
        };
    }, [toasts, handleDismiss]);

    return (
        <div className="toast-container">
            {toasts.map(toast => (
                <div key={toast.id} className={`toast ${toast.type}-toast`}>
                    {toast.message}
                    <button onClick={() => handleDismiss(toast.id)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default ToastComponent;