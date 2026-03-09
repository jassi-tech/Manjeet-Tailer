import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-s-40 rounded-s-16 border-s-1 border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-s-16 hover:translate-y-s-n10 transition-transform duration-300">
        <div className="w-s-48 h-s-48 bg-primary-light rounded-s-12 flex items-center justify-center text-primary">
            {icon}
        </div>
        <h3 className="text-s-24 font-bold text-primary-deep leading-s-32">{title}</h3>
        <p className="text-s-16 text-slate-500 leading-s-24">{description}</p>
    </div>
);

export default ServiceCard;
