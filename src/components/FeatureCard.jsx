import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-[#f0fdf4] p-s-40 rounded-s-16 text-center flex flex-col items-center gap-s-20 flex-1">
        <div className="w-s-64 h-s-64 bg-[#22c55e] rounded-full flex items-center justify-center text-white">
            {icon}
        </div>
        <h3 className="text-s-24 font-bold text-[#065f46]">{title}</h3>
        <p className="text-s-16 text-[#065f46]/70 leading-s-24">{description}</p>
    </div>
);

export default FeatureCard;
