import { FC, PropsWithChildren } from 'react';
import { Card, CardContent, CardTitle } from './ui/card';

type Props = {
  readonly titleText: string;
};

const CardModal: FC<PropsWithChildren<Props>> = ({ titleText, children }) => {
  return (
    <Card className="max-w-[515px] rounded-2xl p-6">
      <CardContent>
        <CardTitle className="text-[30px] text-center font-roboto text-blue-900 my-2">
          {titleText}
        </CardTitle>
        {children}
      </CardContent>
    </Card>
  );
};

export default CardModal;
