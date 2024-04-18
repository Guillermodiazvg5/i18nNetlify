import { PiCarProfileThin } from 'react-icons/pi';
import { CiCircleInfo } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { P } from '../ui/typography/p';
import { H2 } from '../ui/typography/h2';
import { H6 } from '../ui/typography/h6';
import { AvatarWithName } from '../ui/avatar-with-name';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const ProfileContainer = () => {
  const { t } = useTranslation();
  const commonTexts = t('ProfileContainer', { returnObjects: true }) as {
    aboutUser: string;
    userName: string;
    Rating: string;
    userInformation: string;
    carModel: string;
    descriptionUser: string;
  };

  return (
    <div className="flex flex-col m-6 items-center ">
      <div className=" flex flex-col  max-w-[515px]  items-center p-6">
        <H2 className="text-[40px] text-center font-bold text-blue-800 mb-2">
          {commonTexts.aboutUser}
        </H2>

        <AvatarWithName
          name={commonTexts.userName}
          alt="user"
          picture="https://github.com/shadcn.png"
          fallback="FC"
          classNameWrapper="w-[100px] h-[100px] m-2"
        >
          <H6>{commonTexts.Rating}</H6>
          <FaStar className="text-yellow" />
        </AvatarWithName>

        <div className="flex-initial mt-4 ">
          <div className="flex items-center">
            <CiCircleInfo size={24}></CiCircleInfo>
            <P className="m-2">{commonTexts.userInformation}</P>
          </div>
        </div>

        <div className="flex-initial mb-4">
          <div className="flex items-center">
            <PiCarProfileThin size={24}></PiCarProfileThin>
            <P className="m-2">{commonTexts.carModel}</P>
          </div>
        </div>

        <div className="flex-auto ">
          <P className="text-center">{commonTexts.descriptionUser}</P>
        </div>
      </div>
      <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
    </div>
  );
};

export default ProfileContainer;
