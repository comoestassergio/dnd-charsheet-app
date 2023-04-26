'use client';

import Button from "../Button";
import CategoryWrapper from "../CategoryWrapper";
import InventoryItem from "../inventory/InventoryItem";
import InventoryTable from "../inventory/InventoryTable";
import WeaponItem from "../weapons/WeaponItem";
import WeaponsTable from "../weapons/WeaponsTable";

import { AiOutlinePlus } from 'react-icons/ai';

const Inventory = () => {

    const button = (
        <Button 
            onClick={() => {}} 
            icon={AiOutlinePlus} 
            square
        />
    );

    return (
        <CategoryWrapper title="инвентарь" button={button}>
            <InventoryTable>
                <InventoryItem title="Щит" />
                <InventoryItem title="Щит" />
                <InventoryItem title="Щит" />
                <InventoryItem title="Щит" />
            </InventoryTable>
        </CategoryWrapper>
    )
};

export default Inventory;