import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size variant */
    size?: ButtonSize;
    /** Show a loading indicator and disable the button */
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    className,
    children,
    ...rest
}) => {
    const isDisabled = disabled || loading;

    const classes = [
        'glamour-button',
        `glamour-button--${variant}`,
        `glamour-button--${size}`,
        loading && 'glamour-button--loading',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type="button"
            className={classes}
            disabled={isDisabled}
            {...rest}
        >
            {loading ? <span className="glamour-button__spinner" aria-hidden="true" /> : null}
            <span className="glamour-button__content">{children}</span>
        </button>
    );
};

export default Button;
