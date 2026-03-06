import React from 'react';
import FluidContainer from '../components/FluidContainer';
import FeatureCard from '../components/FeatureCard';
import { SITE_CONTENT } from '../constants/content';

const Features = () => {
    const { features } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'quality':
                return <svg className="w-s-32 h-s-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
            case 'customer':
                return <svg className="w-s-32 h-s-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
            case 'detail':
                return <svg className="w-s-32 h-s-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
            default:
                return null;
        }
    };

    return (
        <section className="py-s-80 bg-green-50/30">
            <FluidContainer className="flex flex-col md:flex-row gap-s-40">
                {features.map((feature, idx) => (
                    <FeatureCard
                        key={idx}
                        title={feature.title}
                        description={feature.description}
                        icon={getIcon(feature.icon)}
                    />
                ))}
            </FluidContainer>
        </section>
    );
};

export default Features;
