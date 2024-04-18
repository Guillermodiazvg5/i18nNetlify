import type { MetaFunction } from '@remix-run/node';

import SectionInformation from '@mitimiti/components/section-information';
import HowItWork from '@mitimiti/components/how-it-work';
import SubscriptionForm from '@mitimiti/components/subscribe-form';
import Footer from '@mitimiti/components/footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'MitiMiti App' },
    { name: 'Comparte gastos entre vehiculos', content: 'Mitimit App' },
  ];
};

export default function Index() {
  return (
    <>
      <SectionInformation />
      <HowItWork />
      <Footer>
        <SubscriptionForm />
      </Footer>
    </>
  );
}
