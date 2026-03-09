import React from 'react';
import FluidContainer from '../components/FluidContainer';
import ServiceCard from '../components/ServiceCard';
import { SITE_CONTENT } from '../constants/content';
import {
    ClothingIcon,
    RepairsIcon,
    RulerIcon,
    WeddingIcon,
    CheckIcon
} from '../components/Icons';

const Services = () => {
    const { services } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'clothing':
                return <ClothingIcon />;
            case 'repairs':
                return <RepairsIcon />;
            case 'ruler':
                return <RulerIcon />;
            case 'wedding':
                return <WeddingIcon />;
            default:
                return null;
        }
    };

    return (
        <section id="services" className="py-s-120 bg-primary-light">
            <FluidContainer>
                <div className="text-center mb-s-80">
                    <h2 className="text-s-48 font-bold text-primary-deep mb-s-24">{services.title}</h2>
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
                        <h2 className="text-s-36 font-bold text-primary-deep mb-s-40">{services.whyChooseUs.title}</h2>
                        <div className="flex flex-col gap-s-24">
                            {services.whyChooseUs.items.map((text, i) => (
                                <div key={i} className="flex gap-s-16 items-start">
                                    <CheckIcon />
                                    <span className="text-s-18 font-medium text-slate-600 leading-s-28">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-s-36 font-bold text-primary-deep mb-s-40">{services.process.title}</h2>
                        <div className="flex flex-col gap-s-24">
                            {services.process.items.map((text, i) => (
                                <div key={i} className="flex gap-s-24 items-center">
                                    <div className="w-s-32 h-s-32 rounded-full bg-primary flex items-center justify-center text-white font-bold text-s-18 shrink-0">
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
