import { FC, PropsWithChildren } from 'react';
import { Form } from '@remix-run/react';

import SearchInput from '@mitimiti/components/input-search';
import { InputDatePicker } from '@mitimiti/components/input-date-picker';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { Button } from '@mitimiti/components/ui/button';
import { ChildrenWithLabel } from '@mitimiti/components/ui/children-with-label';
import { InputSelectSeats } from '@mitimiti/components/input-select-seats';
import { PendingTrip } from '@mitimiti/types/trip';

type Props = {
  readonly isHome: boolean;
  readonly pendingTrip?: PendingTrip | null;
  readonly intentSearch: string;
};

const SearchBar: FC<PropsWithChildren<Props>> = ({
  isHome = true,
  pendingTrip = null,
  intentSearch,
}) => {
  const { t } = useTranslation();
  const { searchBar } = t('home', { returnObjects: true }) as {
    searchBar: {
      labelCityFrom: string;
      labelCityTo: string;
      labelDatePicker: string;
      labelSelectSeats: string;
      dialogPlaceHolderFrom: string;
      dialogPlaceHolderTo: string;
      selectOptions: [];
      btnTextSearchTrip: string;
    };
  };

  return (
    <div
      className={`md:container md:mx-auto z-1 relative ${
        isHome ? 'md:-mt-14 -mt-20' : ''
      }`}
    >
      <Form
        method="post"
        className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-white px-6 pb-6 pt-3 rounded-xl shadow m-2 md:m-0"
      >
        <div className="flex flex-col">
          <SearchInput
            label={searchBar.labelCityFrom}
            inputPlaceHolder={searchBar.dialogPlaceHolderFrom}
            dialogPlaceHolder={searchBar.dialogPlaceHolderFrom}
            nameInput="city-from"
            defaultValue={pendingTrip?.cityFrom ?? ''}
          />
        </div>
        <SearchInput
          label={searchBar.labelCityTo}
          inputPlaceHolder={searchBar.dialogPlaceHolderTo}
          dialogPlaceHolder={searchBar.dialogPlaceHolderTo}
          nameInput="city-to"
          defaultValue={pendingTrip?.cityTo ?? ''}
        />
        <ChildrenWithLabel
          htmlFor="btn-travel-date"
          textLabel={searchBar.labelDatePicker}
        >
          <InputDatePicker
            buttonId="btn-travel-date"
            defaultDate={pendingTrip?.date ?? ''}
          />
        </ChildrenWithLabel>
        <ChildrenWithLabel
          htmlFor="select-seats-required"
          textLabel={searchBar.labelSelectSeats}
        >
          <InputSelectSeats
            selectOptions={searchBar.selectOptions}
            defaultValue={pendingTrip?.seats ?? ''}
          />
        </ChildrenWithLabel>
        <div className="flex flex-col justify-end">
          <Button
            name="intent"
            value={intentSearch}
            type="submit"
            className="w-full"
            variant={'default'}
          >
            {searchBar.btnTextSearchTrip}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;
