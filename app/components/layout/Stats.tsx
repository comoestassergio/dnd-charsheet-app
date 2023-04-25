'use client';

import StatBox from "../StatBox";

const Stats = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <StatBox 
                title="сил"
                value="18"
                indicator
            />
            <StatBox 
                title="лов"
                value="10"
                indicator
            />
            <StatBox 
                title="вын"
                value="11"
                indicator
            />
            <StatBox 
                title="инт"
                value="12"
                indicator
            />
            <StatBox 
                title="муд"
                value="11"
                indicator
            />
            <StatBox 
                title="хар"
                value="17"
                indicator
            />
        </div>
    )
};

export default Stats;