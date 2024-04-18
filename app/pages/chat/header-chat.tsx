import { Button } from '@mitimiti/components/ui/button';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Avatar } from '@mitimiti/components/ui/avatar';
import { P } from '@mitimiti/components/ui/typography/p';
import { H2 } from '@mitimiti/components/ui/typography/h2';
import TripInfoChat from './trip-info-chat';

type Props = {
  readonly nameUser?: string;
  readonly urlImgProgile?: string;
  readonly typeUserName?: 'conductor' | 'pasajero';
  readonly tripDate?: string;
  readonly hourStart?: string;
  readonly startLocation?: string;
  readonly hourFinish?: string;
  readonly finishLocation?: string;
  readonly buttonAction?: () => JSX.Element;
  readonly showTipInfo?: boolean;
};
const HeaderChat = ({
  nameUser,
  urlImgProgile,
  typeUserName,
  tripDate,
  hourStart,
  startLocation,
  hourFinish,
  finishLocation,
  buttonAction,
  showTipInfo,
}: Props) => {
  return (
    <>
      <div className="w-full flex items-center p-3 space-x-2 border-b-[1px]">
        <Button variant="ghost" className="p-2">
          <IoIosArrowRoundBack className="size-[24px]" />
        </Button>
        <Avatar
          src={urlImgProgile}
          alt="Avatar"
          fallback={nameUser?.split('')[0] || 'M'}
        />
        {nameUser ? (
          <H2 className="text-[20px] font-normal ">
            {nameUser?.toUpperCase() || '-'}
          </H2>
        ) : null}
        {typeUserName ? (
          <div className="bg-blue-100 pt-1 pb-1 pr-3 pl-3 rounded-full">
            <P className="text-[12px] ">{typeUserName.toUpperCase()}</P>
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-row justify-between p-4 ">
        <div>
          {showTipInfo ? (
            <TripInfoChat
              tripDate={tripDate}
              hourStart={hourStart}
              startLocation={startLocation}
              hourFinish={hourFinish}
              finishLocation={finishLocation}
            />
          ) : null}
        </div>
        {buttonAction ? (
          <div className="h-full flex items-center">{buttonAction()}</div>
        ) : null}
      </div>
    </>
  );
};

export default HeaderChat;
