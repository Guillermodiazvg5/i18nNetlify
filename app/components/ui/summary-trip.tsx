import { FC, PropsWithChildren } from 'react';

import { FiUser } from 'react-icons/fi';
import { FaRegCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import { CardDescription } from './card';

type Props = {
  readonly hourStart?: string;
  readonly startLocation?: string;
  readonly hourFinish?: string;
  readonly finishLocation?: string;
  readonly numberOfPassengers?: string;
  readonly renderAvatars?: () => JSX.Element;
};

export const SummaryTrip: FC<PropsWithChildren<Props>> = ({
  hourStart,
  startLocation,
  hourFinish,
  finishLocation,
  numberOfPassengers,
  renderAvatars,
}) => {
  return (
    <>
      <div
        data-testid="post-from-trip"
        className="flex direction-row items-center m-3 ml-0"
      >
        <FaRegCircle className="mr-2 " />
        <CardDescription className="text-gray-900">
          {hourStart} - {startLocation}
        </CardDescription>
      </div>
      <div
        data-testid="post-to-trip"
        className="flex direction-row items-center m-3 ml-0"
      >
        <IoLocationOutline className="mr-2 " />
        <CardDescription className="text-gray-900">
          {hourFinish} - {finishLocation}
        </CardDescription>
      </div>
      <div
        data-testid="post-seats"
        className="flex direction-row items-center m-3 ml-0"
      >
        <FiUser className="mr-2 " />
        <CardDescription className="text-gray-900">
          {numberOfPassengers}
        </CardDescription>
        {renderAvatars ? <div className="ml-3">{renderAvatars()}</div> : null}
      </div>
    </>
  );
};
