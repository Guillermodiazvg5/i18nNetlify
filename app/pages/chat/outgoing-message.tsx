import { P } from '@mitimiti/components/ui/typography/p';

type Props = {
  readonly userName?: string;
  readonly message?: string;
  readonly urlImgProgile?: string;
  readonly date?: Date;
};
const OutgoingMessage = ({ message, date }: Props) => {
  const day = date ? date?.toLocaleDateString() : '-';
  const time = date ? `${date?.getHours()}:${date?.getMinutes()}` : null;

  if (!message) return null;
  return (
    <div className="w-full flex items-end flex-col p-2 ">
      <div className="rounded-lg p-3 max-w-[70%]">
        <div className="flex flex-row w-full justify-between pl-1 pr-3">
          <P className="text-[13px] text-gray-500">Tú</P>
          <P className="text-[12px] text-gray-400">
            {day}, {time}
          </P>
        </div>
        <div className="bg-blue-900 rounded-lg p-3">
          <P className="text-white text-[14px] font-normal">{message}</P>
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessage;
