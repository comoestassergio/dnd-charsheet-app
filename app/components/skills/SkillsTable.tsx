'use client';

interface SkillTableProps {
    children: React.ReactNode | React.ReactNode [],
};

const SkillsTable: React.FC<SkillTableProps> = ({
    children
}) => {
    return (
        <div className="grid grid-cols-2 gap-3 w-full">
            {children}
        </div>
    )
};

export default SkillsTable;