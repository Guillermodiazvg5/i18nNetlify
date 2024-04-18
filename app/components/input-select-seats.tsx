import { useState } from 'react';
import { useSearchParams } from '@remix-run/react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@mitimiti/components/ui/select';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const InputSelectSeats = ({
  selectOptions = [],
  defaultValue,
}: {
  selectOptions?: [];
  defaultValue?: string;
}) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();
  const { inputSelect } = t('components', { returnObjects: true }) as {
    inputSelect: {
      placeHolderSelect: string;
    };
  };

  const setValueHandler = (value: string) => {
    setValue(value);
    searchParams.set('seats', value);
    setSearchParams(searchParams, {
      preventScrollReset: true,
    });
  };

  return (
    <Select onValueChange={setValueHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue
          className="text-gray-500"
          placeholder={inputSelect.placeHolderSelect}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {selectOptions.map((option: { label: string; value: string }) => (
            <SelectItem key={option.label} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { InputSelectSeats };
