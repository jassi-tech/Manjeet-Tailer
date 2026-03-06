import React from 'react';
import FluidContainer from '../components/FluidContainer';
import ServiceCard from '../components/ServiceCard';
import { SITE_CONTENT } from '../constants/content';

const Services = () => {
    const { services } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'clothing':
                return <svg className="w-s-24 h-s-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
            case 'repairs':
                return <svg className="w-s-24 h-s-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121" /></svg>;
            case 'ruler':
                return <svg className="w-s-24 h-s-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
            case 'wedding':
                return <svg className="w-s-24 h-s-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>;
            default:
                return null;
        }
    };

    return (
        <section id="services" className="py-s-120 bg-[#f0fdf4]">
            <FluidContainer>
                <div className="text-center mb-s-80">
                    <h2 className="text-s-48 font-bold text-[#065f46] mb-s-24">{services.title}</h2>
                    <p className="text-s-18 text-slate-500 max-w-s-800 mx-auto leading-s-28 text-center">
                        {services.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s-32 mb-s-80">
                    {services.items.map((s, idx) => (
                        <ServiceCard
                            key={idx}
                            title={s.title}
                            description={s.description}
                            icon={getIcon(s.icon)}
                        />
                    ))}
                </div>

                {/* Combined Why Choose Us & Our Process Card */}
                <div className="bg-white p-s-50 rounded-s-24 shadow-2xl shadow-black/5 flex flex-col md:flex-row gap-s-80 md:gap-s-120">
                    <div className="flex-1">
                        <h2 className="text-s-36 font-bold text-[#065f46] mb-s-40">{services.whyChooseUs.title}</h2>
                        <div className="flex flex-col gap-s-24">
                            {services.whyChooseUs.items.map((text, i) => (
                                <div key={i} className="flex gap-s-16 items-start">
                                    <svg className="w-s-20 h-s-20 text-[#22c55e] mt-s-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-s-18 font-medium text-slate-600 leading-s-28">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-s-36 font-bold text-[#065f46] mb-s-40">{services.process.title}</h2>
                        <div className="flex flex-col gap-s-24">
                            {services.process.items.map((text, i) => (
                                <div key={i} className="flex gap-s-24 items-center">
                                    <div className="w-s-32 h-s-32 rounded-full bg-[#00a854] flex items-center justify-center text-white font-bold text-s-18 shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-s-18 font-medium text-slate-600">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FluidContainer>
        </section>
    );
};

export default Services;
