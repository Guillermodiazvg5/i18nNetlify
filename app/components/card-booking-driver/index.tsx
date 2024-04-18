import { CardTrip } from '../ui/card-trip';
import { AvatarWithName } from '../ui/avatar-with-name';
import { H6 } from '../ui/typography/h6';
import { FaStar } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { SummaryTrip } from '../ui/summary-trip';
import Navbar from '../ui/navbar';
import { H2 } from '../ui/typography/h2';
import { P } from '../ui/typography/p';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const CardBookingDriver = () => {
  const { t } = useTranslation();
  const commonTexts = t('BookingDriver', { returnObjects: true }) as {
    titleSection: string;
    paragrapSection: string;
    titelTextCard: string;
    driverName: string;
    userRating: string;
    buttonSendMessage: string;
    buttonCancelRequest: string;
    finishLocation: string;
    hourFinish: string;
    numberpassengers: string;
    hourStart: string;
    startLocation: string;
    pricePerSeat: string;
    paragrapInformative: string;
  };

  return (
    <div className="p-4 border border-black">
      <div className="mb-6">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center mb-4">
        <H2 className="text-blue-800">{commonTexts.titleSection}</H2>
      </div>
      <div className="flex justify-center mb-6 ">
        <P className="max-w-[220px] text-center">
          {commonTexts.paragrapSection}
        </P>
      </div>

      <div className="flex justify-center mb-4">
        <CardTrip
          titleText={commonTexts.titelTextCard}
          renderHeader={() => (
            <AvatarWithName
              picture={'https://github.com/shadcn.png'}
              alt="Avatar"
              fallback="JA"
              name={commonTexts.driverName}
            >
              <H6 className="font-bold">{commonTexts.userRating}</H6>
              <FaStar className="text-yellow" />
            </AvatarWithName>
          )}
          renderFotter={() => (
            <div>
              <Button
                variant="outline"
                className="w-full flex-1 first-letter:capitalize mb-2"
              >
                {commonTexts.buttonSendMessage}
              </Button>
              <Button
                variant="outline"
                className="w-full first-letter:capitalize"
              >
                {commonTexts.buttonCancelRequest}
              </Button>
            </div>
          )}
        >
          <>
            <SummaryTrip
              finishLocation={commonTexts.finishLocation}
              hourFinish={commonTexts.hourFinish}
              numberOfPassengers={commonTexts.numberpassengers}
              hourStart={commonTexts.hourStart}
              startLocation={commonTexts.startLocation}
            />
            <p className="text-center text-sm font-bold tracking-widest">
              {commonTexts.pricePerSeat}
            </p>
          </>
        </CardTrip>
      </div>
      <P className="flex justify-center text-center">
        {commonTexts.paragrapInformative}
      </P>
    </div>
  );
};

export default CardBookingDriver;
