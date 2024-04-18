import { useEffect } from 'react';
import { useActionData } from '@remix-run/react';

import SectionInformation from '@mitimiti/components/section-information';
import SearchBar from '@mitimiti/components/search-bar';
import { action } from '@mitimiti/routes/_home.pasajeros/action';

const Passenger = () => {
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    console.log(actionData);
  }, [actionData]);

  return (
    <>
      <SearchBar isHome={true} intentSearch={'passenger-search-bar'} />
      <div className="h-[50px]"></div>
      <SectionInformation />
    </>
  );
};

export default Passenger;
