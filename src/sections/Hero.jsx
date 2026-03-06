import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';
import { useBackendAssets } from '../hooks/useBackendAssets';

const Hero = ({ onBookClick }) => {
    const { hero } = SITE_CONTENT;
    const { assets, loading } = useBackendAssets();

    return (
        <section id="home" className="relative py-s-60 overflow-hidden bg-slate-50">
            <FluidContainer className="grid lg:grid-cols-2 gap-s-80 items-center">
                <div className="text-left">
                    <h1 className="text-s-48 md:text-s-40 font-bold text-[#065f46] leading-s-40 tracking-s-n2 mb-s-32">
                        {hero.title}
                    </h1>
                    <p className="text-s-18 text-slate-500 mb-s-64 leading-s-32 max-w-s-600">
                        {hero.description}
                    </p>
                    <div className="flex gap-s-24">
                        <a
                            href="#services"
                            className="bg-[#00a854] text-white px-s-20 py-s-20 rounded-s-12 font-bold text-s-18 hover:bg-[#008f47] transition-all flex items-center justify-center"
                        >
                            {hero.primaryCTA}
                        </a>
                        <button
                            onClick={onBookClick}
                            className="border-s-2 border-[#00a854] text-[#00a854] px-s-20 py-s-20 rounded-s-12 font-bold text-s-18 hover:bg-green-50 transition-all"
                        >
                            {hero.secondaryCTA}
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/5] rounded-s-32 overflow-hidden shadow-2xl relative z-10 bg-slate-200 animate-pulse">
                        {!loading && assets?.heroImage && (
                            <img
                                src={assets.heroImage}
                                alt="Tailoring Craftsmanship"
                                className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
                                onLoad={(e) => e.target.classList.remove('opacity-0')}
                            />
                        )}
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-slate-400 font-medium">Loading...</span>
                            </div>
                        )}
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-s-40 -left-s-40 w-s-200 h-s-200 bg-[#00a854]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-s-40 -right-s-40 w-s-300 h-s-300 bg-green-100/50 rounded-full blur-3xl"></div>
                </div>
            </FluidContainer>
        </section>
    );
};

export default Hero;
