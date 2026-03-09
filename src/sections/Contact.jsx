import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';
import {
    LocationIcon,
    PhoneIcon,
    EmailIcon,
    ClockIcon
} from '../components/Icons';

const Contact = () => {
    const { contact } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'location':
                return <LocationIcon />;
            case 'phone':
                return <PhoneIcon />;
            case 'email':
                return <EmailIcon />;
            case 'clock':
                return <ClockIcon />;
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
                                title="Manjeet Boutique Location"
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
