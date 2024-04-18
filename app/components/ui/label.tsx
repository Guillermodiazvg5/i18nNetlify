import * as LabelInput from '@radix-ui/react-label';

const Label = ({
  htmlFor,
  textLabel,
  className,
}: {
  htmlFor: string;
  textLabel: string;
  className: string;
}) => (
  <LabelInput.Root className={className} htmlFor={htmlFor}>
    {textLabel.toUpperCase()}
  </LabelInput.Root>
);

export { Label };
