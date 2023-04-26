import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "react-icons";

type  ButtonProps = {
    title?: string,
    onClick: () => void,
    disabled?: boolean,
    icon?: IconType,
    square?: boolean,
    small?: boolean
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
    title, onClick, disabled, icon: Icon, square, type, small, ...props
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            bg-white
            text-md
            ${small && 'text-xs'} 
            ${square ? ' p-3 aspect-square' : 'px-4 py-2 '}
            rounded-lg
            border border-neutral-500
            disabled:cursor-not-allowed
            disabled:bg-neutral-300
            disabled:text-neutral-800
            hover:text-white
            hover:bg-black
            transition
            `}
            {...props}
            >
            {Icon && (
                <Icon size={16} />
            )}
            {title}
        </button>
    )
};

export default Button;