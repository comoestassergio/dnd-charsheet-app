'use client';

interface StatBoxProps {
    title: string,
    value: string,
    indicator?: boolean,
    subvalue?: string,
}

const StatBox: React.FC<StatBoxProps> = ({
    title, value, indicator, subvalue
}) => {

    const calculateModifier = () => {
        const modifier = Math.floor((parseInt(value) - 10) / 2);

        if (modifier >= 0) {
            return `+${modifier}`
        }
        return modifier;
    };

    return (
        <div className="relative flex items-center justify-center h-24 w-24 border border-neutral-500 rounded-xl">
            <span className="absolute text-neutral-400 text-sm uppercase top-2 font-medium">{title}</span>
            <span className={`text-3xl ${!indicator && !subvalue ? 'mt-2' : ''}`}>{value}</span>

            {indicator && !subvalue && (
                <div className="absolute h-8 w-12 bg-white border border-neutral-500 rounded-full -bottom-2 flex items-center justify-center">
                    <span className="font-medium">{calculateModifier()}</span>
                </div>
            )}

            {subvalue && !indicator && (
                <div className="absolute bottom-2 border-t-[1px] border-neutral-300">
                    <span className="text-sm text-neutral-400">из {subvalue}</span>
                </div>
            )}
            
        </div>
    )
};

export default StatBox;