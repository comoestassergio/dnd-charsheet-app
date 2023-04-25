'use client';

interface ChallengesTableProps {
    children: React.ReactNode | React.ReactNode [],
}

const ChallengesTable: React.FC<ChallengesTableProps> = ({
    children
}) => {
    return (
        <div className="relative grid grid-cols-2 grid-rows-3 gap-3 w-full">
            {children}
        </div>
    )
};

export default ChallengesTable;