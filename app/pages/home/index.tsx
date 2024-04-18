import Header from '@mitimiti/components/header';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Outlet } from '@remix-run/react';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t('greeting-home') as string} />
      <Outlet />
    </>
  );
};

export default Home;
