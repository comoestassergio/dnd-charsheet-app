'use client';

import CategoryWrapper from "../CategoryWrapper";

interface PlayerBioProps {
    name: string,
    race: string,
    playerclass: string,
    level: string,
    worldview: string,
    origin: string,
    xp: string,
}

const PlayerBio: React.FC<PlayerBioProps> = ({
    playerclass, level, name, origin, race, worldview, xp
}) => {
    return (
       <CategoryWrapper pad="py-4 px-4">
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">{name}</span>
                <div className="flex items-center text-sm text-neutral-400 gap-2">
                    <span>{level} лвл</span>
                    <span className="h-3 w-px bg-neutral-300"></span>
                    <span>{xp} опыта</span>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 bg-neutral-100 p-4 rounded-lg">
                <div className="flex flex-col relative">
                    <span className="text-xs self-center mb-1">{playerclass}</span>
                    <span className="w-full h-px bg-neutral-300"></span>
                    <span className="text-[0.5rem] text-neutral-400 self-center">Класс</span>
                </div>
                <div className="flex flex-col relative">
                    <span className="text-xs self-center mb-1">{worldview}</span>
                    <span className="w-full h-px bg-neutral-300"></span>
                    <span className="text-[0.5rem] text-neutral-400 self-center">Мировоззрение</span>
                </div>
                <div className="flex flex-col relative">
                    <span className="text-xs self-center mb-1">{race}</span>
                    <span className="w-full h-px bg-neutral-300"></span>
                    <span className="text-[0.5rem] text-neutral-400 self-center">Раса</span>
                </div>
                <div className="flex flex-col relative">
                    <span className="text-xs self-center mb-1">{origin}</span>
                    <span className="w-full h-px bg-neutral-300"></span>
                    <span className="text-[0.5rem] text-neutral-400 self-center">Происхождение</span>
                </div>
            </div>
        </div>
       </CategoryWrapper>
    )
};

export default PlayerBio;