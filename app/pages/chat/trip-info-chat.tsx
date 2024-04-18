import { P } from '@mitimiti/components/ui/typography/p';
import { FaRegCircle } from 'react-icons/fa';
import { CardDescription } from '@mitimiti/components/ui/card';
import { IoLocationOutline } from 'react-icons/io5';

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
};
const TripInfoChat = ({
  tripDate,
  hourStart,
  startLocation,
  hourFinish,
  finishLocation,
}: Props) => {
  return (
    <div className="flex flex-col space-y-2 pl-4">
      {tripDate ? (
        <P className="text-[12px] color-gray-300">{tripDate}</P>
      ) : null}
      <div
        data-testid="post-from-trip"
        className="flex direction-row items-center"
      >
        <FaRegCircle className="mr-2" />
        <CardDescription className="text-gray-900">
          {hourStart} - {startLocation}
        </CardDescription>
      </div>
      <div
        data-testid="post-to-trip"
        className="flex direction-row items-center"
      >
        <IoLocationOutline className="mr-2" />
        <CardDescription className="text-gray-900">
          {hourFinish} - {finishLocation}
        </CardDescription>
      </div>
    </div>
  );
};

export default TripInfoChat;
