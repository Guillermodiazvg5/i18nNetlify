import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H2: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  );
};
