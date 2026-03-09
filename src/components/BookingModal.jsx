import React from 'react';
import { CloseIcon, PhoneIcon } from './Icons';

const BookingModal = ({ isOpen, onClose, phoneNumber }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-s-32">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-s-32 shadow-2xl w-full max-w-s-600 overflow-hidden transform transition-all">
                <div className="p-s-48 text-center">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-s-24 right-s-24 p-s-12 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <CloseIcon />
                    </button>

                    {/* Content */}
                    <div className="w-s-80 h-s-80 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-s-32">
                        <PhoneIcon className="w-s-40 h-s-40 text-primary" />
                    </div>

                    <h2 className="text-s-32 font-bold text-primary-deep mb-s-16">Book Your Appointment</h2>
                    <p className="text-s-18 text-slate-500 mb-s-40 leading-s-28">
                        Call us directly to schedule your professional tailoring consultation.
                    </p>

                    <div className="bg-slate-50 rounded-s-24 p-s-32 mb-s-40 border-s-1 border-slate-100">
                        <span className="block text-s-14 font-bold text-slate-400 uppercase tracking-widest mb-s-8">Phone Number</span>
                        <span className="text-s-32 font-bold text-primary tracking-s-n1">{phoneNumber}</span>
                    </div>

                    <div className="flex flex-col gap-s-16">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-primary text-white py-s-20 rounded-s-18 font-bold text-s-18 hover:bg-primary-dark transition-all shadow-lg shadow-primary-light flex items-center justify-center gap-s-12"
                        >
                            <PhoneIcon className="w-s-20 h-s-20" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
