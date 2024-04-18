import { forwardRef } from 'react';
import { Input } from './input';
import { Label } from './label';
import { InputProps } from '@mitimiti/types/inputProps.d';

const InputWithLabel = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      htmlFor,
      textLabel,
      placeholder,
      value,
      nameInput,
      required = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className="grid columns-1 w-full items-center mt-2">
        <Label
          className={`${className} text-[13px] font-bold leading-[30px]`}
          htmlFor={htmlFor}
          textLabel={textLabel}
        />
        <Input
          type={type}
          id={htmlFor}
          name={nameInput}
          data-testid={`test-id-${nameInput}`}
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          required={required}
          {...props}
        />
      </div>
    );
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export { InputWithLabel };
