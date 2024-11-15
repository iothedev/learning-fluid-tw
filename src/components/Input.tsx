import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: 'primary' | 'secondary';
}

const Input = ({ variant, placeholder, className, ...props }: InputProps) => (
    <input
        placeholder={placeholder}
        className={clsx(
            'outline-none ~text-sm/base border rounded-xl',
            {
                'bg-background-1 text-background-2 border-background-2 placeholder:text-background-2 px-6 py-4': variant === 'primary',
                'bg-transparent text-background-1 border-background-1 placeholder:text-background-1 px-8 py-6': variant === 'secondary',
            },
            className
        )}
        {...props}
    />
);

export { Input };
