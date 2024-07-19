import React, {createContext, ReactNode} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextType {
    showToast: (str: string, type: 'success' | 'error') => number | string;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider:  React.FC<{children:ReactNode }> = ({ children }) => {
    const showToast = (str:string, type: "success" | "error"):number | string => {
        switch (type) {
            case 'success':
                return toast.success(str, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            case 'error':
                return toast.error(str, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            default:
                throw Error("Unknown toast");
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider;
