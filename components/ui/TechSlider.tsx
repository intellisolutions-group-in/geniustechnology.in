"use client";

import React from "react";

interface TechSliderProps {
    items: string[];
}

/**
 * A reusable infinite horizontal slider for technology stacks.
 * Optimized for a compact, premium look with responsive widths.
 */
export default function TechSlider({ items }: TechSliderProps) {
    // Triple the items to ensure wide screens are always filled and the loop is seamless
    const tripleItems = [...items, ...items, ...items];

    return (
        <div className="max-w-5xl mx-auto">
            <div className="tech-slider-mask">
                <div className="tech-slider-track flex items-center gap-4">
                    {tripleItems.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="px-5 py-2 rounded-full bg-blue-50/40 border border-black/5 text-gray-700 font-semibold text-[11px] uppercase tracking-wider whitespace-nowrap hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-all duration-300 cursor-default"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
