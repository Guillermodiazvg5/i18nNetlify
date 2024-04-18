import { Avatar } from '@mitimiti/components/ui/avatar';
import { P } from '@mitimiti/components/ui/typography/p';

type Props = {
  readonly userName?: string;
  readonly message?: string;
  readonly urlImgProgile?: string;
  readonly date?: Date;
};
const IncomingMessage = ({ userName, message, date, urlImgProgile }: Props) => {
  const day = date ? date?.toLocaleDateString() : '-';
  const time = date ? `${date?.getHours()}:${date?.getMinutes()}` : null;

  if (!message) return null;
  return (
    <div className="w-full flex items-center flex-row p-2 ">
      <Avatar
        src={urlImgProgile}
        alt="Avatar"
        fallback={userName?.split('')[0] || 'M'}
      />
      <div className="rounded-lg p-3 max-w-[70%]">
        <div className="flex flex-row w-full justify-between pl-1 pr-3">
          {userName ? (
            <P className="text-[13px] text-gray-500">{userName}</P>
          ) : null}
          <P className="text-[12px] text-gray-400">
            {day}, {time}
          </P>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <P className="text-black text-[14px] font-normal">{message}</P>
        </div>
      </div>
    </div>
  );
};

export default IncomingMessage;
