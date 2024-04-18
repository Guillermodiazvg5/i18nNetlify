import { Form, Link } from '@remix-run/react';
import { Input } from '@mitimiti/components/ui/input';
import { Button } from '@mitimiti/components/ui/button';
import { H2 } from '@mitimiti/components/ui/typography/h2';
import { P } from '@mitimiti/components/ui/typography/p';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { H6 } from '@mitimiti/components/ui/typography/h6';

const FormSignUp = () => {
  const { t } = useTranslation();
  const commonTexts = t('sectionSignUpForm', { returnObjects: true }) as {
    joinMembers: string;
    labelName: string;
    placeholderName: string;
    labelNumberMobile: string;
    placeholderNumberMobile: string;
    labelEmail: string;
    placeholderEmail: string;
    labelPassword: string;
    placeholderPassword: string;
    labelConfrimPassword: string;
    placeholderConfirmPassword: string;
    registerButton: string;
    continueGoogleButton: string;
    continueFacebookButton: string;
    paragraphCount: string;
    linkLogin: string;
  };

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <div className="flex w-full h-full flex-col sm:flex-row ">
        <div className="w-full h-full">
          <div className="mt-6">
            <H2 className=" text-blue-800 block text-center pb-6 ">
              {commonTexts.joinMembers}
            </H2>
          </div>

          <Form className="max-w-[75%] mx-auto space-y-6">
            {[
              {
                label: commonTexts.labelName,
                placeholder: commonTexts.placeholderName,
                type: 'text',
                id: 'name',
                name: 'name',
              },
              {
                label: commonTexts.labelNumberMobile,
                placeholder: commonTexts.placeholderNumberMobile,
                type: 'tel',
              },
              {
                label: commonTexts.labelEmail,
                placeholder: commonTexts.placeholderEmail,
                type: 'email',
              },
              {
                label: commonTexts.labelPassword,
                placeholder: commonTexts.placeholderPassword,
                type: 'password',
              },
              {
                label: commonTexts.labelConfrimPassword,
                placeholder: commonTexts.placeholderConfirmPassword,
                type: 'password',
              },
            ].map(({ label, type, id, name, placeholder }, index) => (
              <div key={index} className="mb-6">
                <H6 className="font-normal text-[12px]">
                  <label htmlFor={`username-${index}`}>{label} *</label>
                </H6>
                <Input
                  type={type}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}
            <div className="flex justify-center">
              <Button type="submit">{commonTexts.registerButton}</Button>
            </div>
          </Form>

          <div className="grid grid-cols-1">
            <div className="grid grid-rows-3 gap-2">
              <div className="flex justify-center mt-4">
                <Button
                  className="mt-3 border-gray hover:bg-gray-100 hover:text-gray min-w-[250px]"
                  variant="outline"
                >
                  <FcGoogle className="mr-3" />
                  {commonTexts.continueGoogleButton}
                </Button>
              </div>
              <div className="flex justify-center">
                <Button
                  className="mt-3 border-gray hover:bg-gray-100 hover:text-gray min-w-[250px]"
                  variant="outline"
                >
                  <FaFacebook color="#1877F2" className="mr-3" />
                  {commonTexts.continueFacebookButton}
                </Button>
              </div>
              <div className="flex justify-center">
                <P>
                  {commonTexts.paragraphCount}
                  <Link to="/" className="underline ml-1">
                    {commonTexts.linkLogin}
                  </Link>
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
