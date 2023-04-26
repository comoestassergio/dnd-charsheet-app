'use client';

interface WeaponItemProps {
    title: string,
    attackBonus: string,
    damageType: string,
};

const WeaponItem: React.FC<WeaponItemProps> = ({
    title, attackBonus, damageType
}) => {
    return (
        <div className="grid grid-cols-[3fr_1fr_2fr] gap-3">
            <div className="bg-neutral-100 rounded-lg px-3 py-1 text-xs flex items-center justify-center">
                <span className="block">{title}</span>
            </div>
            <div className="bg-neutral-100 rounded-lg px-3 py-1 text-xs flex items-center justify-center">
                <span className="block">+{attackBonus}</span>
            </div>
            <div className="bg-neutral-100 rounded-lg px-3 py-1 text-xs flex items-center justify-center">
                <span className="block">{damageType}</span>
            </div>
        </div>
    )
};

export default WeaponItem;