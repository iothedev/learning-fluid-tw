'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    href?: string;
}

const Button = ({
    variant,
    className,
    children,
    onClick,
    disabled,
    href,
    ...props
}: ButtonProps) => {
    const router = useRouter();

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) return;

            if (href) return router.push(href);
            if (onClick) return onClick(event);
        },
        [href, onClick, disabled, router]
    );

    return (
        <button
            className={clsx(
                'font-medium rounded-xl px-6 py-4 w-fit select-none',
                {
                    'bg-background-2 text-background-1': variant === 'primary',
                    'bg-accent-1 text-background-2': variant === 'secondary',
                },
                className
            )}
            onClick={handleClick}
            {...props}
        >
            <span className='~text-xs/base'>{children}</span>
        </button>
    );
};

export { Button };
