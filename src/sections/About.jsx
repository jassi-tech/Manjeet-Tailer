import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';

const About = () => {
    const { about } = SITE_CONTENT;

    return (
        <section id="about" className="py-s-120">
            <FluidContainer>
                <div className="text-center mb-s-80">
                    <h2 className="text-s-48 font-bold text-primary-deep mb-s-24">{about.title}</h2>
                    <p className="text-s-18 text-slate-500 max-w-s-800 mx-auto leading-s-28">
                        {about.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-s-80">
                    <div className="flex-1">
                        <div className="rounded-s-32 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={about.image}
                                alt="Tailor shop"
                                className="w-full min-h-s-500 md:h-s-480 object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-s-38">
                        {about.paragraphs.map((text, i) => (
                            <p key={i} className={i === 0 ? "text-s-20 text-slate-700 leading-s-32" : "text-s-18 text-slate-600 leading-s-30"}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </FluidContainer>
        </section>
    );
};

export default About;
