import React from 'react';
import FluidContainer from '../components/FluidContainer';
import { SITE_CONTENT } from '../constants/content';
import {
    FacebookIcon,
    InstagramIcon,
    EmailIcon,
    LogoIcon,
    ExternalLinkIcon
} from '../components/Icons';

const Footer = () => {
    const { brand, footer } = SITE_CONTENT;

    const getSocialIcon = (type) => {
        switch (type) {
            case 'facebook':
                return <FacebookIcon />;
            case 'instagram':
                return <InstagramIcon />;
            case 'email':
                return <EmailIcon />;
            default:
                return null;
        }
    };

    return (
        <footer className="bg-primary-deep pt-s-120 pb-s-40 text-white">
            <FluidContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-s-80 mb-s-80 border-b-s-1 border-white/10 pb-s-80 text-left">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-s-30">
                        <div className="flex items-center gap-s-16">
                            <div className="bg-white w-s-48 h-s-48 rounded-s-12 flex items-center justify-center shrink-0">
                                <LogoIcon className="w-s-24 h-s-24" stroke="var(--primary)" strokeWidth="3" />
                            </div>
                            <span className="text-s-20 font-bold text-white tracking-s-n1">{brand.name}</span>
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
                            <ExternalLinkIcon />
                        </a>
                    )}
                </div>
            </FluidContainer>
        </footer>
    );
};

export default Footer;
