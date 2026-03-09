import React from 'react';
import FluidContainer from '../components/FluidContainer';
import FeatureCard from '../components/FeatureCard';
import { SITE_CONTENT } from '../constants/content';
import {
    QualityIcon,
    CustomerIcon,
    DetailIcon
} from '../components/Icons';

const Features = () => {
    const { features } = SITE_CONTENT;

    const getIcon = (type) => {
        switch (type) {
            case 'quality':
                return <QualityIcon />;
            case 'customer':
                return <CustomerIcon />;
            case 'detail':
                return <DetailIcon />;
            default:
                return null;
        }
    };

    return (
        <section className="py-s-80 bg-primary-light/30">
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
