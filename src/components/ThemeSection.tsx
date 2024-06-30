import React, { ReactNode } from 'react';
import { useTheme } from '../context';

interface ThemedSectionProps {
    children: ReactNode;
}

const ThemedSection = ({ children }: ThemedSectionProps) => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black'}>
            {children}
        </div>
    );
};

export default ThemedSection;
