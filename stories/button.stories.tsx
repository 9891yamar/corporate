import { ReactNode } from 'react';

interface SimpleButtonProps {
    children: ReactNode;
    style?: React.CSSProperties;
}

const SimpleButton = ({ children, style, ...props }: SimpleButtonProps) => (
    <button
        style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            ...style,
        }}
        {...props}
    >
        {children}
    </button>
);

export const Primary = () => <SimpleButton>Primary Button</SimpleButton>;
export const Secondary = () => (
    <SimpleButton style={{ backgroundColor: '#6c757d' }}>
        Secondary Button
    </SimpleButton>
);
