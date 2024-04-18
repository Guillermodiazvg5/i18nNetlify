import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H6: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h6
      className={cn(
        'scroll-m-20 font-inter font-bold text-sm leading-16 tracking-tighter text-left text-gray-900 ',
        className
      )}
    >
      {children}
    </h6>
  );
};
