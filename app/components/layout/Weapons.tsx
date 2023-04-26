'use client';

import Button from "../Button";
import CategoryWrapper from "../CategoryWrapper";
import WeaponItem from "../weapons/WeaponItem";
import WeaponsTable from "../weapons/WeaponsTable";

import { AiOutlinePlus } from 'react-icons/ai';

const Weapons = () => {

    const button = (
        <Button 
            onClick={() => {}} 
            icon={AiOutlinePlus} 
            square
        />
    );

    return (
        <CategoryWrapper title="оружие" button={button}>
            <WeaponsTable>
                <WeaponItem
                    title="Метательное копье"
                    attackBonus="2"
                    damageType="1к6 кол." 
                />
                <WeaponItem
                        title="Метательное копье"
                        attackBonus="2"
                        damageType="1к6 кол." 
                />
                <WeaponItem
                        title="Метательное копье"
                        attackBonus="2"
                        damageType="1к6 кол." 
                />
            </WeaponsTable>
        </CategoryWrapper>
    )
};

export default Weapons;