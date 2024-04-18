import { FC, PropsWithChildren } from 'react';
import { Form } from '@remix-run/react';

import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Button } from '@mitimiti/components/ui/button';
import { InputWithLabel } from '@mitimiti/components/ui/input-with-label';
import CardModal from '@mitimiti/components/card-modal';
import { P } from '../ui/typography/p';

interface StepTwoTripProps {
  intentSearch?: string | undefined;
}

const StepTwoTrip: FC<PropsWithChildren<StepTwoTripProps>> = ({
  intentSearch,
}: StepTwoTripProps) => {
  const { t } = useTranslation();
  const { secondStep } = t('driverPost', { returnObjects: true }) as {
    secondStep: {
      titleModal: string;
      labelTime: string;
      labelMoney: string;
      placeHolderTimeInput: string;
      placeHolderMoneyInput: string;
      publishTripButton: string;
      commissionDisclaimer: string;
    };
  };
  return (
    <CardModal titleText={secondStep.titleModal}>
      <Form method="post" className="max-w-[400px]">
        <InputWithLabel
          htmlFor="departure-time"
          nameInput="departure-time"
          textLabel={secondStep.labelTime}
          type="time"
          placeholder={secondStep.placeHolderTimeInput}
        />
        <InputWithLabel
          htmlFor="price-per-seat"
          nameInput="price-per-seat"
          textLabel={secondStep.labelMoney}
          type="number"
          placeholder={secondStep.placeHolderMoneyInput}
        />
        <P className="text-gray-750 text-sm pt-2">
          {secondStep.commissionDisclaimer}
        </P>
        <Button
          type="submit"
          name="intent"
          value={intentSearch}
          className="w-full first-letter:capitalize mt-4"
        >
          {secondStep.publishTripButton}
        </Button>
      </Form>
    </CardModal>
  );
};

export default StepTwoTrip;
