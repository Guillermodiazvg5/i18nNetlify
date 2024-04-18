/* eslint-disable react/prop-types */
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '../../lib/utils';

const AvatarWrapper = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
AvatarWrapper.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-testid="avatar-image"
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type Props = {
  readonly src?: string;
  readonly alt: string;
  readonly fallback: string;
  readonly classNameWrapper?: string;
  readonly classNameAvatar?: string;
  readonly classNameFallback?: string;
};

const Avatar: React.FC<Props> = ({
  src,
  alt,
  fallback,
  classNameWrapper,
  classNameAvatar,
  classNameFallback,
}) => (
  <AvatarWrapper className={classNameWrapper}>
    <AvatarImage src={src} alt={alt} className={classNameAvatar} />
    <AvatarFallback className={classNameFallback}>{fallback}</AvatarFallback>
  </AvatarWrapper>
);

export { Avatar, AvatarWrapper, AvatarImage, AvatarFallback };
