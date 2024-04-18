import { H1 } from '@mitimiti/components/ui/typography/h1';
import { P } from '@mitimiti/components/ui/typography/p';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@mitimiti/components/ui/input-otp';
import { Button } from '@mitimiti/components/ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Link, useFetcher } from '@remix-run/react';
import { NAMES_ACTIONS_OTP } from '@mitimiti/routes/cuenta.verificacion/actions/verificacion.action';
import { action } from '@mitimiti/routes/cuenta.verificacion/route';

import { H2 } from '@mitimiti/components/ui/typography/h2';
import Stepper from '@mitimiti/components/ui/stepper';

const ConfirmOtpContainer = () => {
  const fetcher = useFetcher<typeof action>();
  const { t } = useTranslation();

  const translateOtpForm = t('otpForm', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    noRecivedCode: string;
    submit: string;
    back: string;
    register: string;
    phone: string;
    verification: string;
    resend: string;
    errorValidOtp: string;
  };

  return (
    <section className="w-full h-full p-5 overflow-auto flex flex-col justify-center items-center">
      <div className="container grid grid-cols-1 gap-6 px-1 lg:px-32">
        <Stepper
          steps={[
            {
              label: translateOtpForm.register,
              redirectTo: '#',
              status: 'completado',
            },
            {
              label: translateOtpForm.phone,
              redirectTo: '#',
              status: 'completado',
            },
            {
              label: translateOtpForm.verification,
              redirectTo: '/cuenta/verificacion',
              status: 'progreso',
            },
          ]}
        />
      </div>
      <H1 className="text-blue-900 mt-5">{translateOtpForm.title}</H1>
      <div className="bg-gray-50 p-8 rounded mt-5 mb-5">
        <P className="text-[14px] text-gray-400 font-thin text-center">
          {translateOtpForm.subtitle}
        </P>
      </div>
      <fetcher.Form method="post">
        <InputOTP
          name="codeValidator"
          id="codeValidator"
          className="mb-5 flex justify-center items-center w-full"
          maxLength={6}
          required
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 3).map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {slots.slice(3).map((slot, index) => (
                  <InputOTPSlot key={index + 3} {...slot} />
                ))}
              </InputOTPGroup>
            </>
          )}
        />
        {fetcher && fetcher?.data && fetcher?.data?.ok === false ? (
          <H2 className="text-[12px] text-red-400 ">
            {(fetcher as { data: { error: string } })?.data?.error ||
              translateOtpForm.errorValidOtp}
          </H2>
        ) : null}
        <div className="flex flex-col items-center">
          <Button
            name="intent"
            value={NAMES_ACTIONS_OTP.validateOTP}
            type="submit"
            className="mb-5 "
          >
            {translateOtpForm.submit}
          </Button>
          <Link to="/cuenta/telefono">{translateOtpForm.back}</Link>
        </div>
        <div className="flex justify-center items-center">
          <P className="font-light text-[14px] md:text-[17px]">
            ¿{translateOtpForm.noRecivedCode}?
          </P>
          <fetcher.Form method="post">
            <Button
              value={NAMES_ACTIONS_OTP.resendCodeOTP}
              name="intent"
              type="submit"
              className="mt-3 text-[14px] md:text-[17px] text-black m-0 p-0 ml-2  font-light underline hover:text-blue-900"
              variant="link"
            >
              {translateOtpForm.resend}
            </Button>
          </fetcher.Form>
        </div>
      </fetcher.Form>
    </section>
  );
};

export default ConfirmOtpContainer;
