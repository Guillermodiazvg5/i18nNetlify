import { H2 } from '@mitimiti/components/ui/typography/h2';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import AuthButtons from './components/auth-buttons';
import { Button } from '@mitimiti/components/ui/button';
import { P } from '@mitimiti/components/ui/typography/p';
import Stepper from '@mitimiti/components/ui/stepper';
import { Link } from '@remix-run/react';

type Props = {
  isOnboarding: boolean;
};
const LoginPage = ({ isOnboarding }: Props) => {
  const { t } = useTranslation();
  const translateLogin = t('auth', { returnObjects: true }) as {
    login: string;
    newUser: string;
    registerButton: string;
    register: string;
    phone: string;
    verification: string;
    registerWith: string;
  };
  return (
    <section className="w-full h-full p-5 overflow-auto flex justify-center items-center">
      <div className="container grid grid-cols-1 gap-6 px-1 lg:px-32">
        {isOnboarding ? (
          <Stepper
            steps={[
              {
                label: translateLogin.register,
                redirectTo: '/cuenta/login',
                status: 'progreso',
              },
              {
                label: translateLogin.phone,
                redirectTo: '/cuenta/telefono',
                status: 'pendiente',
              },
              {
                label: translateLogin.verification,
                redirectTo: '/cuenta/verificacion',
                status: 'pendiente',
              },
            ]}
          />
        ) : null}
        <H2 className="text-blue-800 font-medium text-center">
          {isOnboarding ? translateLogin.registerWith : translateLogin.login}
        </H2>
        <div className="">
          <AuthButtons />
          <div className="flex flex-row justify-center items-center text-[17px]">
            <P className="font-light text-[14px] md:text-[17px]">
              ¿{translateLogin.newUser}?
            </P>
            <Button
              asChild
              className="mt-3 text-black m-0 p-0 ml-2 text-[14px] md:text-[17px] font-light underline hover:text-blue-900"
              variant="link"
            >
              <Link to={isOnboarding ? '/cuenta/login' : '/cuenta/registrar'}>
                {isOnboarding
                  ? translateLogin.login
                  : translateLogin.registerButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
