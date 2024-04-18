import { FC, PropsWithChildren } from 'react';
import { IoIosSearch, IoMdNotificationsOutline } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

import logoMitiMiti from '../../components/assets/logo-mitimiti.png';
import { Button } from './button';
import { Avatar } from './avatar';
import { Link, useFetcher } from '@remix-run/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { action } from '@mitimiti/root';

type Props = {
  readonly showOptions?: boolean;

  readonly user?: {
    readonly name: string;
    readonly avatar: string;
  };
};

const Navbar: FC<PropsWithChildren<Props>> = ({ showOptions = true, user }) => {
  const fetcher = useFetcher<typeof action>();

  const handlerCloseSession = async () => {
    fetcher.submit({}, { method: 'POST' });
  };

  return (
    <div className="flex flex-row justify-between p-2 max-h-[60px] sticky top-0 bg-white z-[10]">
      <div>
        <Button
          variant="ghost"
          className="mr-2 p-2 flex items-center hover:bg-white"
          asChild
        >
          <Link to="/">
            <img src={logoMitiMiti} alt="logo-vamosMitimiti" width="45px" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-row justify-center items-center">
        {showOptions ? (
          <>
            <Button variant="ghost" className="mr-2 p-2 ">
              <IoIosSearch className="size-[17px] " />
            </Button>
            <Button variant="ghost" className="mr-2 p-2 ">
              <IoMdNotificationsOutline className="size-[17px]" />
            </Button>
            <Avatar
              src={user?.avatar}
              alt={user?.name || 'image user'}
              fallback={user?.name || ''}
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <Avatar
                  src={user?.avatar}
                  alt={user?.name || 'image user'}
                  fallback={user?.name || ''}
                />
                <RiArrowDropDownLine />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Mis Viajes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handlerCloseSession}>
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button variant="ghost" className="mr-2 p-2" asChild>
              <Link to="/login" className="mr-2 p-2 ">
                <FiUser className="size-[17px]" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
