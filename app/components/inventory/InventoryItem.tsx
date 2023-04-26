'use client';

interface InventoryItemProps {
    title: string,
};

const InventoryItem: React.FC<InventoryItemProps> = ({
    title,
}) => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="bg-neutral-100 rounded-md px-3 py-2 text-xs flex">
                <span className="block">{title}</span>
            </div>
        </div>
    )
};

export default InventoryItem;