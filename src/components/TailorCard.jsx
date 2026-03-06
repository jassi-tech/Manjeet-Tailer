import React from 'react';

const TailorCard = ({ title, description, image }) => {
    return (
        <div className="bg-slate-800 border-s-1 border-slate-700 rounded-s-24 overflow-hidden flex flex-col transition-transform hover:scale-[1.02]">
            <div className="h-s-240 bg-slate-700">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-s-32 flex flex-col gap-s-16">
                <h3 className="text-s-24 font-bold text-white leading-s-32">{title}</h3>
                <p className="text-s-16 text-slate-400 leading-s-24">{description}</p>
                <button className="mt-s-16 px-s-24 py-s-12 bg-indigo-600 text-white font-semibold rounded-s-12 hover:bg-indigo-500 transition-colors text-s-14 self-start">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default TailorCard;
