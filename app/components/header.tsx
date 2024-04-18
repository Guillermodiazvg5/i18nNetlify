import React, { PropsWithChildren } from 'react';
import SwitchRoleUser from './switch-role-user';
import { H2 } from './ui/typography/h2';

type Props = {
  readonly title: string;
};

const Header: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <header className="bg-blue-900 max-h-72">
      <div className="h-[288px] flex flex-col place-items-center justify-center relative">
        <div className="mb-4">
          <H2 className="font-bold text-white z-[1]">{title}</H2>
        </div>
        <SwitchRoleUser />
        <img
          className="absolute top-0 right-0 lg:right-2 w-56 h-56 lg:w-128 lg:h-60 -z-1"
          alt="vector right"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Vector%20(1).svg"
        />
        <img
          className="absolute top-0 right-1 lg:right-6 w-28 h-14 lg:w-32 lg:h-16 z-0"
          alt="elipse rosada"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Ellipse%2030.svg"
        />
        <img
          className="absolute bottom-0 left-4 lg:left-36 w-24 h-24 lg:w-32 lg:h-24 z-1"
          alt="vector right"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Ellipse%20left%20header.svg"
        />

        <img
          className="absolute bottom-0 -left-5 lg:left-0 w-56 h-56 lg:w-128 lg:h-72 z-0"
          alt="vector right"
          src="https://hrbgecxfmpekzsgwdphj.supabase.co/storage/v1/object/public/assets/home/Vector.svg"
        />
        {children}
      </div>
    </header>
  );
};

export default Header;
