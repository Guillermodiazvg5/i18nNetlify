import { CardTrip } from '../ui/card-trip';
import { AvatarWithName } from '../ui/avatar-with-name';
import { Button } from '../ui/button';
import { SummaryTrip } from '../ui/summary-trip';
import Navbar from '../ui/navbar';
import { H2 } from '../ui/typography/h2';
import { P } from '../ui/typography/p';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const CardBookingPassenger = () => {
  const { t } = useTranslation();
  const commonTexts = t('BookingPassenger', { returnObjects: true }) as {
    titleSection: string;
    paragrapSection: string;
    titelTextCard: string;
    passangerName: string;
    userRating: string;
    buttonSendMessage: string;
    buttonCancelOffer: string;
    finishLocation: string;
    numberpassengers: string;
    startLocation: string;
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
              name={commonTexts.passangerName}
            >
              <P>{commonTexts.userRating}</P>
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
                {commonTexts.buttonCancelOffer}
              </Button>
            </div>
          )}
        >
          <>
            <SummaryTrip
              finishLocation={commonTexts.finishLocation}
              numberOfPassengers={commonTexts.numberpassengers}
              startLocation={commonTexts.startLocation}
            />
          </>
        </CardTrip>
      </div>
      <P className="flex justify-center text-center">
        {commonTexts.paragrapInformative}
      </P>
    </div>
  );
};

export default CardBookingPassenger;
