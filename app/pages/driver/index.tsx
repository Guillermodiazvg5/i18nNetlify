import { useEffect, useState } from 'react';
import { useLoaderData, useActionData } from '@remix-run/react';

import SearchBar from '@mitimiti/components/search-bar';
import SectionPassengerPost from '@mitimiti/components/section-passenger-post';
import SectionInformation from '@mitimiti/components/section-information';
import { loader, action } from '@mitimiti/routes/_home.conductores/route';
import HowItWork from '@mitimiti/components/how-it-work';
import DialogDemo from '@mitimiti/components/ui/modal';
import StepTwoTrip from '@mitimiti/components/trips/step-two-trip';
import { PendingTrip } from '@mitimiti/types/trip';

const Driver = () => {
  const actionData = useActionData<typeof action>() as {
    data?: { pendingTrip?: PendingTrip };
  };
  const [showSecondStep, setShowSecondStep] = useState(
    actionData?.data?.pendingTrip ?? null
  );
  const { data, type, errorMessage } = useLoaderData<typeof loader>();

  useEffect(() => {
    setShowSecondStep(actionData?.data?.pendingTrip ?? null);
  }, [actionData]);

  if (type === 'error') {
    return <div>Error, {errorMessage}</div>;
  }

  return (
    <>
      <SearchBar
        isHome={true}
        pendingTrip={data?.pendingTrip}
        intentSearch={'publish-trip-step-one'}
      />
      <div className="h-[50px]"></div>
      <HowItWork />
      <SectionPassengerPost postsPassenger={data?.postsPassengers} />
      <SectionInformation />
      <DialogDemo
        open={showSecondStep !== null}
        onOpenChange={() => setShowSecondStep(null)}
      >
        <StepTwoTrip intentSearch={'publish-trip-step-two'} />
      </DialogDemo>
    </>
  );
};

export default Driver;
