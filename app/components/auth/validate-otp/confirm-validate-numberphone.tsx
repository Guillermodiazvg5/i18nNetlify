import { H1 } from '@mitimiti/components/ui/typography/h1';
import { Button } from '@mitimiti/components/ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Link, useFetcher } from '@remix-run/react';
import { Input } from '@mitimiti/components/ui/input';

import { action } from '@mitimiti/routes/cuenta.telefono/route';
import Stepper from '@mitimiti/components/ui/stepper';

const ValidatePhoneNumberContainer = () => {
  const fetcher = useFetcher<typeof action>();
  const { t } = useTranslation();

  const translateOtpForm = t('otpForm', { returnObjects: true }) as {
    titleValidation: string;
    subtitleValidation: string;
    noRecivedCode: string;
    validar: string;
    loading: string;
    back: string;
    inputPhonePlaceholder: string;
  };

  return (
    <section className="w-full h-full p-5 overflow-auto flex flex-col justify-center items-center">
      <div className="container grid grid-cols-1 gap-6 px-1 lg:px-32">
        <Stepper
          steps={[
            {
              label: 'Cuenta',
              redirectTo: '#',
              status: 'completado',
            },
            {
              label: 'Celular',
              redirectTo: '/cuenta/telefono',
              status: 'progreso',
            },
            {
              label: 'Verificación',
              redirectTo: '#',
              status: 'pendiente',
            },
          ]}
        />
      </div>
      <H1 className="text-blue-900 mt-5">{translateOtpForm.titleValidation}</H1>
      <fetcher.Form
        method="post"
        className="max-w-full w-full md:max-w-[60%] flex flex-col items-center"
      >
        <Input
          type="phone"
          className="w-full mb-5 mt-5"
          placeholder={translateOtpForm.inputPhonePlaceholder}
          name="phone"
          id="phone"
          required
          maxLength={10}
        />
        <div className="flex flex-col items-center">
          <Button name="intent" type="submit" className="mb-5 ">
            {fetcher?.state !== 'idle'
              ? translateOtpForm.loading
              : translateOtpForm.validar}
          </Button>
          <Link to={'/cuenta/login'} className="disabled-link">
            {translateOtpForm.back}
          </Link>
        </div>
      </fetcher.Form>
    </section>
  );
};

export default ValidatePhoneNumberContainer;
