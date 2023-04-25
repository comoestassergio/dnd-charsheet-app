'use client';

interface CategoryWrapperProps {
    children: React.ReactNode | React.ReactNode [],
    title: string,
    button?: React.ReactNode,
}

const CategoryWrapper: React.FC<CategoryWrapperProps> = ({
    children, title, button
}) => {
    return (
        <div className="relative border border-neutral-500 rounded-xl flex items-center justify-center py-6 px-5">
            <div className="absolute -top-3 left-3 bg-white px-3">
                <span className="font-bold text-md first-letter:capitalize">{title}</span>
            </div>

            {children}

            {button && (
                <div className="absolute -bottom-5 right-3">
                    {button}
                </div>
            )}
        </div>
    )
};

export default CategoryWrapper;