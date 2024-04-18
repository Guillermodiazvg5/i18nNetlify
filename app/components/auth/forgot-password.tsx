import AccountsLayout from '../layouts/layout-account';

import img from '../assets/image-container.png';
import { H1 } from '../ui/typography/h1';
import { P } from '../ui/typography/p';
import { Button } from '../ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Input } from '../ui/input';

const ForgotPassword = () => {
  const { t } = useTranslation();

  const translateForgotPassword = t('forgotPassword', {
    returnObjects: true,
  }) as {
    title: string;
    subtitle: string;
    email: string;
    placeholderEmail: string;
    noRecivedCode: string;
    sendCode: string;
    resend: string;
  };
  return (
    <AccountsLayout srcImage={img}>
      <div className="w-full h-full flex flex-col items-center justify-center mt-5 pr-10 pl-10 overflow-auto">
        <H1 className="text-blue-900 text-center">
          ¿{translateForgotPassword.title}?
        </H1>
        <div className="w-full flex flex-col justify-start items-start mt-4">
          <P className="text-[12px] text-black-900 font-normal text-center">
            {translateForgotPassword.email.toUpperCase()}
          </P>
          <Input placeholder={translateForgotPassword.placeholderEmail} />
        </div>
        <Button className="mb-5 mt-5">
          {translateForgotPassword.sendCode}
        </Button>
        <div className="flex justify-center items-center">
          <P className="font-light text-[11px] md:text-[17px]">
            ¿{translateForgotPassword.noRecivedCode}?
          </P>
          <Button
            className="mt-3 text-[11px] md:text-[17px] text-black m-0 p-0 ml-2  font-light underline hover:text-blue-900"
            variant="link"
          >
            {translateForgotPassword.resend}
          </Button>
        </div>
      </div>
    </AccountsLayout>
  );
};

export default ForgotPassword;
