import { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
    variant?: 'default' | 'elevated' | 'outlined';
    padding?: 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: ReactNode;
}

export const Card = ({
    variant = 'default',
    padding = 'md',
    hoverable = false,
    className,
    style,
    children,
}: CardProps) => {
    const cardClasses = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hoverable ? styles.hoverable : '',
        className || '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={cardClasses} style={style}>
            {children}
        </div>
    );
};

export interface CardHeaderProps {
    className?: string;
    children: ReactNode;
}

export const CardHeader = ({ className, children }: CardHeaderProps) => {
    const headerClasses = [styles.header, className || '']
        .filter(Boolean)
        .join(' ');

    return <div className={headerClasses}>{children}</div>;
};

export interface CardBodyProps {
    className?: string;
    children: ReactNode;
}

export const CardBody = ({ className, children }: CardBodyProps) => {
    const bodyClasses = [styles.body, className || '']
        .filter(Boolean)
        .join(' ');

    return <div className={bodyClasses}>{children}</div>;
};

export interface CardFooterProps {
    className?: string;
    children: ReactNode;
}

export const CardFooter = ({ className, children }: CardFooterProps) => {
    const footerClasses = [styles.footer, className || '']
        .filter(Boolean)
        .join(' ');

    return <div className={footerClasses}>{children}</div>;
};
