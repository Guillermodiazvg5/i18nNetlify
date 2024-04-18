import React, { PropsWithChildren } from 'react';
import { Link } from '@remix-run/react';
import { P } from './ui/typography/p';
import { H6 } from './ui/typography/h6';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const footer = t('footer', {
    returnObjects: true,
  }) as {
    title: string;
    home: string;
    about: string;
    contact: string;
    copy: string;
    terms: string;
    privacy: string;
    cookies: string;
  };
  return (
    <footer className="border-t-2 border-gray-300 w-full py-10 md:py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 border-gray-100 border-b pb-6">
        <div>
          <H6 className="mb-2">{footer.title}</H6>
          <ul>
            <li className="py-1">
              <Link to={'/'}>{footer.home}</Link>
            </li>
            <li className="py-1">
              <Link to={'/'}>{footer.about}</Link>
            </li>
            <li className="py-1">
              <Link to={'/'}>{footer.contact}</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 py-5">
        <P className="text-sm text-gray-400">
          {`© ${new Date().getFullYear()} ${footer.copy}`}
        </P>
        <ul className="flex gap-3 justify-start md:justify-end text-gray-400 mt-4 md:mt-0">
          <li>
            <Link to={'/'}>{footer.terms}</Link>
          </li>
          <li>
            <Link to={'/'}>{footer.privacy}</Link>
          </li>
          <li>
            <Link to={'/'}>{footer.cookies}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
