'use client';

interface SkillItemProps {
    title: string,
    modifier: string,
}

const SkillItem: React.FC<SkillItemProps> = ({
    title, modifier
}) => {

    const checkTitleLength = (_title: string) => {
        if (_title.length < 13) {
            return _title;
        }

        const shortenedTitle = _title.split('').splice(0, 11).concat('.').join('');
        return shortenedTitle;
    };

    return (
        <div className="flex items-center gap-2">
            <div className="font-medium text-xs">+{modifier}</div>
            <span className="text-xs first-letter:capitalize">{checkTitleLength(title)}</span>
        </div>
    )
};

export default SkillItem;