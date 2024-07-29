import React from 'react';

interface ModalProps {
    closeModal: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                {children}
            </div>
            <button 
                className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
                onClick={closeModal}
            >
                &times;
            </button>
        </div>
    );
};

export default Modal;
