'use client';

import CategoryWrapper from "../CategoryWrapper";
import SkillGroup from "../skills/SkillGroup";
import SkillItem from "../skills/SkillItem";
import SkillsTable from "../skills/SkillsTable";

const Skills = () => {
    return (
        <CategoryWrapper title="Умения">
            
            <SkillsTable>
                <div className="flex flex-col gap-3">
                    <SkillGroup title="ловкость">
                        <SkillItem 
                            title="Акробатика"
                            modifier="0"
                        />
                        <SkillItem 
                            title="локость рук"
                            modifier="0"
                        />
                        <SkillItem 
                            title="скрытность"
                            modifier="0"
                        />
                    </SkillGroup>
                    <SkillGroup title="сила">
                        <SkillItem 
                            title="атлетика"
                            modifier="0"
                        />
                    </SkillGroup>
                    <SkillGroup title="интеллект">
                        <SkillItem 
                            title="магия"
                            modifier="0"
                        />
                        <SkillItem 
                            title="история"
                            modifier="0"
                        />
                        <SkillItem 
                            title="расследование"
                            modifier="0"
                        />
                        <SkillItem 
                            title="природа"
                            modifier="0"
                        />
                        <SkillItem 
                            title="религия"
                            modifier="0"
                        />
                    </SkillGroup>
                </div>
                <div className="flex flex-col gap-3">
                    <SkillGroup title="мудрость">
                        <SkillItem 
                            title="дрессировка"
                            modifier="0"
                        />
                        <SkillItem 
                            title="внимание"
                            modifier="0"
                        />
                        <SkillItem 
                            title="медицина"
                            modifier="0"
                        />
                        <SkillItem 
                            title="проницательность"
                            modifier="0"
                        />
                        <SkillItem 
                            title="выживание"
                            modifier="0"
                        />
                    </SkillGroup>
                    
                    <SkillGroup title="харизма">
                        <SkillItem 
                            title="обман"
                            modifier="0"
                        />
                        <SkillItem 
                            title="запугивание"
                            modifier="0"
                        />
                        <SkillItem 
                            title="исполнение"
                            modifier="0"
                        />
                        <SkillItem 
                            title="убеждение"
                            modifier="0"
                        />
                    </SkillGroup>
                </div>
            </SkillsTable>
        </CategoryWrapper>
    )
};

export default Skills;