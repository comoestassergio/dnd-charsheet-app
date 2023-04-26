'use client';

import { UnifrakturCook } from 'next/font/google';
import { AiOutlineMenu } from 'react-icons/ai';

const font = UnifrakturCook({weight: '700', style: 'normal', subsets: ['latin']});

const Header = () => {
    return (
        <header className="sticky flex items-center justify-between px-6 py-3">
            <div className={font.className}>
                <h1 className='text-3xl'>DnD Charsheet App</h1>
            </div>
            <div 
                className="
                    p-4
                    md:py-1
                    md:px-2
                    border
                    border-neutral-200
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    cursor-pointer
                    hover:shadow-md
                    transition
                "
                >
                    <AiOutlineMenu />
                </div>
        </header>
    )
};

export default Header;