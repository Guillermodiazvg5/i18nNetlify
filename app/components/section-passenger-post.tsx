import { Avatar } from '@mitimiti/components/ui/avatar';
import { Button } from '@mitimiti/components/ui/button';
import { CardTrip } from '@mitimiti/components/ui/card-trip';
import { SummaryTrip } from '@mitimiti/components/ui/summary-trip';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { format } from '@formkit/tempo';
import { Trip } from '@mitimiti/types/trip';
import { PostPassenger } from '@mitimiti/types/post';
import React from 'react';

type Props = {
  readonly postsPassenger: PostPassenger[];
};

const SectionPasengerPost: React.FC<Props> = ({ postsPassenger }) => {
  const { t } = useTranslation();
  const { title, buttonSeat, buttonMessage } = t('passenger-post', {
    returnObjects: true,
  }) as {
    title: string;
    trips: Trip[];
    buttonSeat: string;
    buttonMessage: string;
  };

  return (
    <section className="container mb-8">
      <h3 className="text-center text-4xl text-blue-900 font-bold my-5">
        {title}
      </h3>
      <section
        data-testid="posts-passenger"
        className="m-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-6"
      >
        {postsPassenger.map(
          ({ id, fromTrip, toTrip, dateTrip, askingSeats, user }) => (
            <CardTrip
              data-testid="post-passenger"
              key={id}
              titleText={format(dateTrip, { date: 'full' })}
              renderHeader={() => (
                <div className="flex items-center gap-2">
                  {user && (
                    <>
                      <Avatar
                        src={user?.profilePicture || ''}
                        alt={`Avatar de ${user.name}`}
                        fallback="JA"
                        classNameWrapper=""
                        classNameAvatar=""
                        classNameFallback=""
                      />
                      <h6 className="uppercase text-sm font-bold">
                        {user.name}
                      </h6>
                    </>
                  )}
                </div>
              )}
              renderFotter={() => (
                <div>
                  <Button className="w-full flex-1 first-letter:capitalize mb-2">
                    {buttonSeat}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full first-letter:capitalize"
                  >
                    {buttonMessage}
                  </Button>
                </div>
              )}
            >
              <SummaryTrip
                startLocation={fromTrip}
                finishLocation={toTrip}
                hourStart={format(dateTrip, { time: 'short' })}
                hourFinish={''}
                numberOfPassengers={`${askingSeats} pasajeros`}
              />
            </CardTrip>
          )
        )}
      </section>
    </section>
  );
};

export default SectionPasengerPost;
