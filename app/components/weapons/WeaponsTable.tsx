'use client';

interface WeaponsTableProps {
    children: React.ReactNode | React.ReactNode [],
};

const WeaponsTable: React.FC<WeaponsTableProps> = ({
    children
}) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-[3fr_1fr_2fr] gap-3">
                <span className="text-[.65rem] text-neutral-400 mt-auto ml-1">Название</span>
                <span className="text-[.65rem] text-neutral-400 mt-auto ml-1">БА</span>
                <span className="text-[.65rem] text-neutral-400 mt-auto ml-1">Тип урона</span>
            </div>
           {children}
        </div>
    )
};

export default WeaponsTable;