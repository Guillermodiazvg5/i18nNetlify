import { PropsWithChildren, FC } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H4: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl',
        className
      )}
    >
      {children}
    </h4>
  );
};
