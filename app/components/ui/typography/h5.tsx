import { FC, PropsWithChildren } from 'react';

type Props = {
  readonly className?: string;
};

import { cn } from '../../../lib/utils';

export const H5: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <h5
      className={cn(
        'scroll-m-20 font-inter font-bold text-20 leading-27 tracking-normal text-black ',
        className
      )}
    >
      {children}
    </h5>
  );
};
