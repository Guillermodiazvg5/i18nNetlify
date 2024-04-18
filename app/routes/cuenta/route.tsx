import type { MetaFunction } from '@remix-run/node';
import LayoutAccount from '@mitimiti/components/layouts/layout-account';
import { Outlet } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'MitiMiti App' },
    { name: 'Comparte gastos entre vehiculos', content: 'Mitimit App' },
  ];
};

export default function Index() {
  return (
    <LayoutAccount>
      <main className="h-[calc(100vh-55px)] overflow-hidden">
        <Outlet />
      </main>
    </LayoutAccount>
  );
}
