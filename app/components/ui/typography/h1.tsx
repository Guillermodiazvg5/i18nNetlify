import { PropsWithChildren, FC } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H1: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  );
};
