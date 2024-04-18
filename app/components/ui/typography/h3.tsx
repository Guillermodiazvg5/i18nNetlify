import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H3: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 font-inter font-bold text-38 leading-46 tracking-normal text-center',
        className
      )}
    >
      {children}
    </h3>
  );
};
