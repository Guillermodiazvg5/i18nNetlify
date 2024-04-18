import React from 'react';
import { NavLink } from '@remix-run/react';
import clsx from 'clsx';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const SwitchRoleUser: React.FC = () => {
  const { t } = useTranslation();

  const MENU_USERS = t('menu', { returnObjects: true }) as {
    path: string;
    name: string;
  }[];

  return (
    <nav className="p-1 border border-blue-900 rounded-4xl flex bg-white z-0">
      {MENU_USERS.map(({ path, name }) => (
        <NavLink key={path} to={path} prefetch="intent" className={'p-1'}>
          {({ isActive }) => (
            <p
              className={clsx(
                'py-2 px-4 rounded-4xl text-blue-900 text-[16px]',
                {
                  'bg-blue-900 text-white': isActive,
                }
              )}
            >
              {name}
            </p>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default SwitchRoleUser;
