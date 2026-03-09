import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';

const Contact = () => {
    const { contact } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'location':
                return <svg className="w-s-28 h-s-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
            case 'phone':
                return <svg className="w-s-28 h-s-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
            case 'email':
                return <svg className="w-s-28 h-s-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
            case 'clock':
                return <svg className="w-s-28 h-s-28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="py-s-120 bg-primary-light">
            <FluidContainer>
                <div className="text-center mb-s-80">
                    <h2 className="text-s-48 font-bold text-primary-deep mb-s-16">{contact.title}</h2>
                    <p className="text-s-18 text-slate-500">{contact.subtitle}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-s-80">
                    {/* Google Maps Embed */}
                    <div className="flex-1 min-h-[400px]">
                        <div className="w-full h-full rounded-s-24 overflow-hidden shadow-2xl shadow-black/5 border-s-1 border-slate-100">
                            <iframe
                                src={contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '450px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Manjeet Tailer Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Information Card */}
                    <div className="flex-1 lg:max-w-s-500">
                        <div className="bg-white p-s-64 rounded-s-24 shadow-2xl shadow-black/5 flex flex-col gap-s-48">
                            <h3 className="text-s-32 font-bold text-primary-deep">{contact.infoTitle}</h3>

                            {contact.details.map((detail, idx) => (
                                <div key={idx} className="flex gap-s-24 text-left">
                                    <div className="w-s-56 h-s-56 bg-primary-light rounded-s-12 flex items-center justify-center text-primary shrink-0">
                                        {getIcon(detail.icon)}
                                    </div>
                                    <div>
                                        <h4 className="text-s-20 font-bold text-primary-deep mb-s-4">{detail.label}</h4>
                                        <p className="text-s-16 text-slate-500 leading-s-24">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FluidContainer>
        </section>
    );
};

export default Contact;
