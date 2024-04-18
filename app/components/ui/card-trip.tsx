import { FC, PropsWithChildren } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';

type Props = {
  readonly renderHeader?: () => JSX.Element;
  readonly titleText?: string;
  readonly renderFotter?: () => JSX.Element;
};

export const CardTrip: FC<PropsWithChildren<Props>> = ({
  titleText,
  children,
  renderFotter,
  renderHeader,
}) => {
  return (
    <Card className="max-w-[300px] rounded-3xl p-6 h-full">
      {renderHeader ? <CardHeader> {renderHeader()} </CardHeader> : null}
      <CardContent>
        {titleText ? (
          <CardTitle className="text-blue-800 font-bold  text-[20px] mb-5 first-letter:capitalize">
            {titleText}
          </CardTitle>
        ) : null}
        {children}
      </CardContent>
      {renderFotter ? (
        <CardFooter className="flex justify-between">
          {renderFotter()}
        </CardFooter>
      ) : null}
    </Card>
  );
};
