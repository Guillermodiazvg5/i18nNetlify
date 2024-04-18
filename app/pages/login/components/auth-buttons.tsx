import { useTranslation } from '@mitimiti/hooks/use-translation';
import SocialButton from './social-button';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const AuthButtons = () => {
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
    <div className="w-full mt-2 flex flex-col items-center my-6">
      <SocialButton intent="auth-google">
        <FcGoogle className="w-6 h-6" />
        {translateLogin.google}
      </SocialButton>
      <SocialButton intent="auth-facebook">
        <FaFacebook color="#1877F2" className="w-6 h-6" />
        {translateLogin.facebook}
      </SocialButton>
    </div>
  );
};

export default AuthButtons;
