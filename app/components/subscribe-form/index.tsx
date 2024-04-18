import { Form } from '@remix-run/react';
import { Input } from '@mitimiti/components/ui/input';
import { Button } from '@mitimiti/components/ui/button';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const SubscriptionForm = () => {
  const { t } = useTranslation();
  const commonTexts = t('SubscriptionForm', { returnObjects: true }) as {
    labelToDate: string;
    placeholderToDate: string;
    subscribeButton: string;
  };

  return (
    <Form className="max-w-[100%] mx-auto space-y-6">
      <label htmlFor="username">{commonTexts.labelToDate}</label>
      <Input
        type="email"
        id="username"
        name="username"
        placeholder={commonTexts.placeholderToDate}
      />
      <div className="grid">
        <Button type="submit">{commonTexts.subscribeButton}</Button>
      </div>
    </Form>
  );
};

export default SubscriptionForm;
