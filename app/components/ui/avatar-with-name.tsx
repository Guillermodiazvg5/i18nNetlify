import React, { PropsWithChildren } from 'react';
import { Avatar } from './avatar';
import { H4 } from './typography/h4';
import { cn } from '@mitimiti/lib/utils';

type Props = {
  readonly name: string;
  readonly picture: string;
  readonly alt: string;
  readonly fallback: string;
  readonly classNameWrapper?: string;
  readonly classNameAvatar?: string;
  readonly classNameFallback?: string;
};

export const AvatarWithName: React.FC<PropsWithChildren<Props>> = ({
  children,
  name,
  picture,
  alt,
  fallback,
  classNameWrapper,
  classNameAvatar,
  classNameFallback,
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar
        src={picture}
        alt={alt}
        fallback={fallback}
        classNameWrapper={cn(`w-[100px] h-[100px] ${classNameWrapper}`)}
        classNameAvatar={classNameAvatar}
        classNameFallback={classNameFallback}
      />
      <div className="flex gap-3 items-center">
        <H4 className="font-bold">{name}</H4>
        {children}
      </div>
    </div>
  );
};
