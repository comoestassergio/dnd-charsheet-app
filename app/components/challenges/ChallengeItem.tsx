'use client';

interface ChallengeItemProps {
    title: string,
    modifier: string,
}

const ChallengeItem: React.FC<ChallengeItemProps> = ({
    title, modifier
}) => {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-neutral-200 rounded-md px-2 py-1 font-medium">+{modifier}</div>
            <span className="uppercase text-sm">{title}</span>
        </div>
    )
};

export default ChallengeItem;