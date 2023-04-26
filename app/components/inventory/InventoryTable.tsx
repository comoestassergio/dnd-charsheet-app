'use client';

import Divider from "../Divider";
import InventoryMoneyBox from "./InventoryMoneyBox";

interface InventoryTableProps {
    children: React.ReactNode | React.ReactNode [],
};

const InventoryTable: React.FC<InventoryTableProps> = ({
    children
}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <InventoryMoneyBox goldvValue="100" />
           {children}
        </div>
    )
};

export default InventoryTable;