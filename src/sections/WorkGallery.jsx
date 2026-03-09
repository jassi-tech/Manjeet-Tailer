import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';
import { useBackendAssets } from '../hooks/useBackendAssets';

const WorkGallery = ({ onBookClick }) => {
    const { gallery } = SITE_CONTENT;
    const { assets, loading } = useBackendAssets();

    return (
        <section id="gallery" className="py-s-120 bg-white text-center">
            <FluidContainer>
                <div className="text-center mb-s-80">
                    <h2 className="text-s-48 font-bold text-primary-deep mb-s-24">{gallery.title}</h2>
                    <p className="text-s-18 text-slate-500 max-w-s-800 mx-auto leading-s-28 text-center">
                        {gallery.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-s-32 mb-s-100">
                    {loading ? (
                        Array(4).fill(0).map((_, i) => (
                            <div key={i} className="rounded-s-16 bg-slate-100 animate-pulse h-s-400"></div>
                        ))
                    ) : (
                        assets?.workGallery?.map((img, i) => (
                            <div key={i} className="rounded-s-16 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-s-400">
                                <img src={img} alt={`Work sample ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))
                    )}
                </div>

                {/* CTA SECTION */}
                <div className="bg-primary rounded-s-24 p-s-20 text-center text-white shadow-2xl">
                    <h2 className="text-s-35 font-bold mb-s-20">{gallery.cta.title}</h2>
                    <p className="text-s-18 mb-s-48 opacity-90">
                        {gallery.cta.description}
                    </p>
                    <button
                        onClick={onBookClick}
                        className="bg-white text-primary px-s-48 py-s-20 rounded-s-12 font-bold text-s-18 hover:bg-slate-50 transition-colors"
                    >
                        {gallery.cta.buttonText}
                    </button>
                </div>
            </FluidContainer>
        </section>
    );
};

export default WorkGallery;
