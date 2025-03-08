'use client'
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import ToastComponent from '~/app/components/NewToast/NewToast';

interface Toast {
    id: string;
    message: string;
    type: 'success' | 'warning' | 'error' | 'info';
}

interface ToastContextProps {
    toasts: Toast[];
    addToast: (message: string, type: 'success' | 'warning' | 'error' | 'info') => void;
    removeToast: (id: string) => void;
}

const ToastContextNew = createContext<ToastContextProps | undefined>(undefined);

interface ToastProviderNewProps {
    children: ReactNode;
}

const ToastProviderNew: React.FC<ToastProviderNewProps> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);


    const addToast = (message: string, type: 'success' | 'warning' | 'error' | 'info') => {
        const id = String(Math.floor(Math.random() * 10000000));
        setToasts([...toasts, { id, message, type }]);
        // setTimeout(() => {
        //     removeToast(id);
        // }, 3000); // Auto-remove after 3 seconds
    };

    const removeToast = (id: string) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    const value: ToastContextProps = {
        toasts,
        addToast,
        removeToast,
    };

    return (
        <ToastContextNew.Provider value={value}>
            {children}
            <ToastComponent />
        </ToastContextNew.Provider>
    );
};

const useToast = () => {
    const context = useContext(ToastContextNew);
    if (!context) {
        throw new Error('useToast must be used within a ToastProviderNew');
    }
    return context;
};

export { ToastProviderNew, useToast };