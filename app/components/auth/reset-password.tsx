import AccountLayout from '../layouts/layout-account';

import img from '../assets/image-container.png';
import { H1 } from '../ui/typography/h1';
import { P } from '../ui/typography/p';
import { Button } from '../ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Input } from '../ui/input';

const ResendPassword = () => {
  const { t } = useTranslation();

  const translateResetPassword = t('resetPassword', {
    returnObjects: true,
  }) as {
    title: string;
    subtitle: string;
    placeholderEmail: string;
    noRecivedCode: string;
    login: string;
    resend: string;
  };
  return (
    <AccountLayout srcImage={img}>
      <div className="w-full h-full flex flex-col items-center justify-center mt-5  pr-12 pl-12 overflow-auto">
        <H1 className="text-blue-900 text-center">
          {translateResetPassword.title}
        </H1>
        <div className="bg-gray-50 w-full p-3 rounded mt-5 mb-5">
          <P className="text-[14px] text-gray-400 font-thin text-center">
            {translateResetPassword.subtitle}
          </P>
        </div>
        <Input placeholder={translateResetPassword.placeholderEmail} />
        <Button className="mb-5 mt-5">{translateResetPassword.login}</Button>
        <div className="flex justify-center items-center">
          <P className="font-light text-[14px] md:text-[17px]">
            ¿{translateResetPassword.noRecivedCode}?
          </P>
          <Button
            className="mt-3 text-[14px] md:text-[17px] text-black m-0 p-0 ml-2  font-light underline hover:text-blue-900"
            variant="link"
          >
            {translateResetPassword.resend}
          </Button>
        </div>
      </div>
    </AccountLayout>
  );
};

export default ResendPassword;
