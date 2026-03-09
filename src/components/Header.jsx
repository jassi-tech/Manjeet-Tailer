import React from 'react';
import FluidContainer from './FluidContainer';
import { SITE_CONTENT } from '../constants/content';

const Header = ({ onBookClick }) => {
    const { brand, navigation } = SITE_CONTENT;

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b-s-1 border-slate-100">
            <FluidContainer className="h-s-120 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-s-16 hover:opacity-80 transition-opacity cursor-pointer">
                    <div className="bg-primary w-s-48 h-s-48 rounded-s-12 flex items-center justify-center shadow-lg shadow-primary-light">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-s-28 h-s-28">
                            <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                        </svg>
                    </div>
                    <span className="text-s-32 font-bold text-primary-deep tracking-s-n1">{brand.logoText}</span>
                </div>

                {/* NAVIGATION */}
                <nav className="hidden md:block">
                    <ul className="flex gap-s-60">
                        {navigation.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className="text-s-18 font-medium text-slate-600 hover:text-primary transition-colors relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-s-8 left-0 w-0 h-s-2 bg-primary transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTA BUTTON */}
                <button
                    onClick={onBookClick}
                    className="bg-primary-deep text-white px-s-30 py-s-16 rounded-s-12 font-bold text-s-16 hover:bg-primary-dark transition-all shadow-lg shadow-slate-200"
                >
                    {brand.headerCTA}
                </button>
            </FluidContainer>
        </header>
    );
};

export default Header;
