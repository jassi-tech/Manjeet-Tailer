import React from 'react';

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
                        <svg className="w-s-24 h-s-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Content */}
                    <div className="w-s-80 h-s-80 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-s-32">
                        <svg className="w-s-40 h-s-40 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
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
                            <svg className="w-s-20 h-s-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
