'use client';

import StatBox from "../StatBox";

const Vitals = () => {
    return (
        <div className="flex items-center gap-3">
            <StatBox 
                title="хиты"
                value="27"
                subvalue="27"
            />
            <StatBox 
                title="кд"
                value="19"
            />
            <StatBox 
                title="иниц"
                value="0"
            />
            <StatBox 
                title="скор"
                value="30"
            />
        </div>
    )
};

export default Vitals;