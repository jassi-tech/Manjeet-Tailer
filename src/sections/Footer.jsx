import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';

const Footer = () => {
    const { brand, footer } = SITE_CONTENT;

    const getSocialIcon = (type) => {
        switch (type) {
            case 'facebook':
                return <svg className="w-s-20 h-s-20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>;
            case 'instagram':
                return <svg className="w-s-20 h-s-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.355 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>;
            case 'email':
                return <svg className="w-s-20 h-s-20" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" /></svg>;
            default:
                return null;
        }
    };

    return (
        <footer className="bg-[#064e3b] pt-s-120 pb-s-40 text-white">
            <FluidContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s-80 mb-s-80 border-b-s-1 border-white/10 pb-s-80 text-left">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-s-32">
                        <div className="flex items-center gap-s-16">
                            <div className="bg-white w-s-48 h-s-48 rounded-s-12 flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#00a854" strokeWidth="3" className="w-s-24 h-s-24">
                                    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                </svg>
                            </div>
                            <span className="text-s-32 font-bold text-white tracking-s-n1">{brand.name}</span>
                        </div>
                        <p className="text-s-18 text-white/70 leading-s-28">
                            {brand.tagline}
                        </p>
                    </div>

                    {/* Dynamic Columns */}
                    {footer.columns.map((col, idx) => (
                        <div key={idx}>
                            <h4 className="text-s-24 font-bold mb-s-40">{col.title}</h4>
                            {col.links && (
                                <ul className="flex flex-col gap-s-24 text-s-18 text-white/70">
                                    {col.links.map((link, i) => (
                                        <li key={i}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>
                                    ))}
                                </ul>
                            )}
                            {col.items && (
                                <ul className="flex flex-col gap-s-24 text-s-18 text-white/70">
                                    {col.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {col.socials && (
                                <div className="flex gap-s-20 mb-s-40">
                                    {col.socials.map((social, i) => (
                                        <a key={i} href={social.href} className="w-s-48 h-s-48 rounded-full border-s-1 border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                                            {getSocialIcon(social.icon)}
                                        </a>
                                    ))}
                                </div>
                            )}
                            {col.followText && (
                                <p className="text-s-18 text-white/50">{col.followText}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-s-16 text-white/50 text-s-16">
                    <p>{footer.copyright}</p>
                    {footer.designer && (
                        <a
                            href={footer.designer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors flex items-center gap-s-8"
                        >
                            {footer.designer.text}
                            <svg className="w-s-14 h-s-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </FluidContainer>
        </footer>
    );
};

export default Footer;
