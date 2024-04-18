import { FC, PropsWithChildren } from 'react';
import { Button } from '@mitimiti/components/ui/button';
import { action } from '@mitimiti/routes/cuenta.$type/route';
import { useFetcher } from '@remix-run/react';

type Props = {
  intent: string;
};

const SocialButton: FC<PropsWithChildren<Props>> = ({ children, intent }) => {
  const fetcher = useFetcher<typeof action>();

  return (
    <fetcher.Form method="post">
      <Button
        name="intent"
        type="submit"
        value={intent}
        className="mt-3 border-gray hover:bg-gray-100 hover:text-gray min-w-[250px] flex justify-start gap-6"
        variant="outline"
      >
        {children}
      </Button>
    </fetcher.Form>
  );
};

export default SocialButton;
