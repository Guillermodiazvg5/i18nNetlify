import React from 'react';
import { Label } from './label';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    textLabel: string;
    placeholder: string;
    value: string;
}

const ChildrenWithLabel = ({
    className,
    htmlFor,
    textLabel,
    children,
}: {
    className?: string;
    htmlFor: string;
    textLabel: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="grid columns-1 w-full items-center mt-2">
            <Label
                className={`${className} text-[13px] font-bold leading-[30px]`}
                htmlFor={htmlFor}
                textLabel={textLabel}
            />
            {children}
        </div>
    );
};
ChildrenWithLabel.displayName = 'ChildrenWithLabel';

export { ChildrenWithLabel };
