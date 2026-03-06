import React from 'react';

const TypographyScale = () => {
    const scales = [
        { label: 'Heading 1', size: 'text-s-64', leading: 'leading-s-72' },
        { label: 'Heading 2', size: 'text-s-48', leading: 'leading-s-56' },
        { label: 'Heading 3', size: 'text-s-32', leading: 'leading-s-40' },
        { label: 'Body Large', size: 'text-s-20', leading: 'leading-s-32' },
        { label: 'Body Regular', size: 'text-s-16', leading: 'leading-s-24' },
        { label: 'Caption', size: 'text-s-12', leading: 'leading-s-18' },
    ];

    return (
        <section className="py-s-80 border-t-s-1 border-slate-800">
            <h2 className="text-s-40 font-bold mb-s-48 text-indigo-400">Typography Scale (FMDS)</h2>
            <div className="flex flex-col gap-s-40">
                {scales.map((s, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-end gap-s-16 md:gap-s-40">
                        <span className="text-s-14 text-slate-500 w-s-120 shrink-0 font-mono">{s.size} / {s.leading}</span>
                        <span className={`${s.size} ${s.leading} font-semibold text-slate-200`}>{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TypographyScale;
