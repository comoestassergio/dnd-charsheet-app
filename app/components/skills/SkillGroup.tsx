'use client';

interface SkillGroupProps {
    children: React.ReactNode | React.ReactNode [],
    title: string
};

const SkillGroup: React.FC<SkillGroupProps> = ({
    children, title
}) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="border-b-[1px] border-neutral-400">
                <span className=" capitalize text-xs text-neutral-400">{title}</span>
            </div>
            <div className="flex flex-col gap-2">

                {children}

            </div>
        </div>
    )
};

export default SkillGroup;