import { H3 } from '@mitimiti/components/ui/typography/h3';
import { H5 } from '@mitimiti/components/ui/typography/h5';
import { P } from '@mitimiti/components/ui/typography/p';
import { Avatar } from '@mitimiti/components/ui/avatar';
import { Button } from '../ui/button';
//import { useTranslation } from '@mitimiti/hooks/use-translation';
import { useTranslation } from 'react-i18next';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import imgAvatarJonathan from '@assets/images/Photo-by-Jonathan-Borba.png';
import imgAvatarTom from '@assets/images/Photo-by-Tom-Pumford.png';
import imgAvatarLeah from '@assets/images/Photo-by-leah-hetteberg.png';
import imgAvatarAlex from '@assets/images/Photo-by-Alex-Green.png';
import imgAvatarMika from '@assets/images/Photo-by-Mika.png';
import PropTypes from 'prop-types';

const sectionVariants = cva('bg-blue-100 py-20', {
  variants: {
    backgroundColor: {
      light: 'bg-white py-20',
      blue: 'bg-blue-100 py-20 ',
      dark: 'bg-gray-100 py-20',
    },
  },
  defaultVariants: {
    backgroundColor: 'light',
  },
});

interface SectionInformationProps {
  backgroundColor?: 'light' | 'blue' | 'dark';
}

const SectionInformation: React.FC<SectionInformationProps> = ({
  backgroundColor = 'light',
}) => {
  const { t } = useTranslation();
  const commonTexts = t('sectionInformation', { returnObjects: true }) as {
    joinMembers: string;
    saveOnTravelCosts: string;
    pSaveOnTravelCosts: string;
    trustedCommunity: string;
    pTrustedCommunity: string;
    userFriendlyExperience: string;
    pUserFriendlyExperience: string;
    buttonRegister: string;
  };

  const avatarCommonClasses =
    '-m-4 border-4 border-pink-100 w-[80px] h-[80px] sm:w-[123.5px] sm:h-[123.5px]';

  const avatares = [
    {
      src: imgAvatarJonathan,
      alt: 'user',
      fallback: 'FC',
    },
    {
      src: imgAvatarTom,
      alt: 'user',
      fallback: 'MV',
    },
    {
      src: imgAvatarLeah,
      alt: 'user',
      fallback: 'CF',
    },
    {
      src: imgAvatarAlex,
      alt: 'user',
      fallback: 'JA',
    },
    {
      src: imgAvatarMika,
      alt: 'user',
      fallback: 'CD',
    },
  ];

  return (
    <section className={cn(sectionVariants({ backgroundColor }))}>
      <div className="container">
        <div className="flex justify-center items-center relative py-6 mb-4">
          {avatares.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar.src}
              classNameWrapper={avatarCommonClasses}
              alt={avatar.alt}
              fallback={avatar.fallback}
            />
          ))}
        </div>
        <H3 className="text-blue-700 text-4xl block text-center pb-6">
          {commonTexts.joinMembers}
        </H3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="p-12 rounded-4xl bg-blue-75 ">
            <H5 className="mb-2 text-blue-900   ">
              {commonTexts['saveOnTravelCosts']}
            </H5>
            <P>{commonTexts.pSaveOnTravelCosts}</P>
          </article>
          <article className="p-12 rounded-4xl bg-blue-75 ">
            <H5 className="mb-2 mb-2 text-blue-900">
              {commonTexts['trustedCommunity']}
            </H5>
            <P>{commonTexts.pTrustedCommunity}</P>
          </article>
          <article className="p-12 rounded-4xl bg-blue-75">
            <H5 className="mb-2 mb-2 text-blue-900">
              {commonTexts['userFriendlyExperience']}
            </H5>
            <P>{commonTexts.pUserFriendlyExperience}</P>
          </article>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Button size="lg">{commonTexts.buttonRegister}</Button>
        </div>
      </div>
    </section>
  );
};
SectionInformation.propTypes = {
  backgroundColor: PropTypes.oneOf(['light', 'blue', 'dark']),
};

export default SectionInformation;
export { sectionVariants };
