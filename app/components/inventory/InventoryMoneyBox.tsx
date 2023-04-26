'use client';

interface InventoryMoneyBoxProps {
    goldvValue?: string,
    silverValue?: string,
    copperValue?: string,
    platinumValue?: string

};

const InventoryMoneyBox: React.FC<InventoryMoneyBoxProps> = ({
    goldvValue = '0', copperValue = '0', platinumValue = '0', silverValue = '0'
}) => {
    return (
        <div className="flex items-center justify-evenly mb-2">
            <div className="flex flex-col items-center justify-center h-10 w-10 border border-neutral-300 rounded-md">
                <span className="text-xs text-neutral-400 uppercase">ММ</span>
                <span className="text-xs font-medium">{copperValue}</span>
            </div>
            <div className="flex flex-col items-center justify-center h-10 w-10 border border-neutral-300 rounded-md">
                <span className="text-xs text-neutral-400 uppercase">СМ</span>
                <span className="text-xs font-medium">{silverValue}</span>
            </div>
            <div className="flex flex-col items-center justify-center h-10 w-10 border border-neutral-300 rounded-md">
                <span className="text-xs text-neutral-400 uppercase">ЗМ</span>
                <span className="text-xs font-medium">{goldvValue}</span>
            </div>
            <div className="flex flex-col items-center justify-center h-10 w-10 border border-neutral-300 rounded-md">
                <span className="text-xs text-neutral-400 uppercase">ПМ</span>
                <span className="text-xs font-medium">{platinumValue}</span>
            </div>
        </div>
    )
};

export default InventoryMoneyBox;