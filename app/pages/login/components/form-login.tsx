import { Input } from '@mitimiti/components/ui/input';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { P } from '@mitimiti/components/ui/typography/p';
import { H2 } from '@mitimiti/components/ui/typography/h2';
import { Button } from '@mitimiti/components/ui/button';
import { Form } from '@remix-run/react';
const FormLogin = () => {
  const { t } = useTranslation();
  const translateLogin = t('auth', { returnObjects: true }) as {
    title: string;
    login: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    google: string;
    facebook: string;
    forgotPassword: string;
    newUser: string;
    registerButton: string;
  };
  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-5 overflow-auto">
      <H2 className="text-blue-800 font-medium">{translateLogin.title}</H2>
      <div className="w-[80%]">
        <Form
          method="POST"
          className="flex flex-col justify-center items-center"
        >
          <div className="mt-3 w-full">
            <P className="text-[12px]">{translateLogin.email.toUpperCase()}</P>
            <Input
              className="w-full"
              name="email"
              type="text"
              placeholder={translateLogin.emailPlaceholder}
            />
          </div>
          <div className="mt-3 w-full">
            <P className="text-[12px]">
              {translateLogin.password.toUpperCase()}
            </P>
            <Input
              name="password"
              className="w-full"
              placeholder={translateLogin.passwordPlaceholder}
            />
          </div>
          <Button
            type="submit"
            name="intent"
            value={'auth-email'}
            className="mt-3"
          >
            {translateLogin.login}
          </Button>
        </Form>
        <div className="flex justify-center items-center text-[17px]">
          <Button
            className="font-light mt-3 text-black m-0 p-0 ml-2 text-[14px] md:text-[17px] underline hover:text-blue-900"
            variant="link"
          >
            {translateLogin.forgotPassword}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;
