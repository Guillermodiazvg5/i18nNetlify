import { H3 } from '@mitimiti/components/ui/typography/h3';
import { P } from '@mitimiti/components/ui/typography/p';

import { CiSearch } from 'react-icons/ci';
import { PiCalendarCheckLight, PiCarProfileThin } from 'react-icons/pi';
import logoMitimiti from '@assets/images/logo-mimiti-2.png';
import vectorLogo from '@assets/images/vector-logo.png';
//import { useTranslation } from '@mitimiti/hooks/use-translation';
import { useTranslation } from 'react-i18next';

const HowItWork = () => {
  const { t } = useTranslation();
  const commonTexts = t('howItWork', { returnObjects: true }) as {
    how: string;
    travelSearch: string;
    travelBooking: string;
    driversShare: string;
  };

  return (
    <section className=" bg-pink-1000  py-10 ">
      <div className=" flex flex-col place-items-center justify-center relative">
        <img
          className="absolute top-15 -left-1 lg:right-2 w-[230px] h-[230px] sm:w-[253.5px] sm:h-[253.5px]  z-0 "
          alt="mitimiti logo"
          src={vectorLogo}
        />

        <div className="flex justify-center mb-4">
          <img src={logoMitimiti} alt="img logo"></img>
        </div>
        <H3 className="relative block text-4xl text-center pb-6 mb-4">
          {commonTexts.how}
        </H3>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article>
            <div className="mb-2 flex justify-center ">
              <CiSearch size={44} />
            </div>
            <P className="text-center">{commonTexts.travelSearch}</P>
          </article>

          <article>
            <div className="mb-2 flex justify-center">
              <PiCalendarCheckLight size={44} />
            </div>
            <P className="text-center">{commonTexts.travelBooking}</P>
          </article>

          <article>
            <div className="mb-2 flex justify-center">
              <PiCarProfileThin size={44} />
            </div>
            <P className="text-center">{commonTexts.driversShare}</P>
          </article>
        </div>
      </div>
    </section>
  );
};
export default HowItWork;
