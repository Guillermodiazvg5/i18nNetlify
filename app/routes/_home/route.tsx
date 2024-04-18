import type { MetaFunction } from '@remix-run/node';

import Home from '@mitimiti/pages/home';

export const meta: MetaFunction = () => {
  return [
    { title: 'MitiMiti App' },
    { name: 'Comparte gastos entre vehiculos', content: 'Mitimit App' },
  ];
};

export default function Index() {
  return <Home />;
}
