import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const P: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <p
      className={cn(
        'font-inter text-base leading-24 tracking-normal text-left',
        className
      )}
    >
      {children}
    </p>
  );
};
