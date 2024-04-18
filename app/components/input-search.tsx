import { useState } from 'react';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { useFetcher, useSearchParams } from '@remix-run/react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@mitimiti/components/ui/command';
import { InputWithLabel } from '@mitimiti/components/ui/input-with-label';
import { P } from '@mitimiti/components/ui/typography/p';
import Spinner from '@mitimiti/components/ui/spinner';
import { useTranslation } from '@mitimiti/hooks/use-translation';
import { action } from '@mitimiti/routes/home_.google-search';

const SearchInput = ({
  label,
  inputPlaceHolder,
  dialogPlaceHolder,
  nameInput,
  defaultValue,
}: {
  label: string;
  inputPlaceHolder: string;
  dialogPlaceHolder: string;
  nameInput: string;
  errors?: object;
  defaultValue?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue ?? '');
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher<typeof action>();
  const { t } = useTranslation();
  const { searchBar } = t('home', { returnObjects: true }) as {
    searchBar: {
      emptyState: string;
      dialogHeaderResults: string;
      importantCities: string;
      importantCitiesArray: string[];
    };
  };

  const onChangeHandler = (searchText: string) => {
    setInputValue(searchText);

    if (searchText.length > 2) {
      fetcher.submit(
        { searchText },
        {
          action: '/home/google-search',
          method: 'POST',
        }
      );
    }
  };

  const selectCityAndClose = (city: string) => {
    setInputValue(city);
    searchParams.set(nameInput, city);
    setSearchParams(searchParams, {
      preventScrollReset: true,
    });
    setOpen(false);
  };

  return (
    <>
      <InputWithLabel
        textLabel={label}
        placeholder={inputPlaceHolder}
        htmlFor={'search-autocomplete-input'}
        nameInput={`input-search-${nameInput}`}
        type={'text'}
        value={inputValue}
        onClick={() => setOpen((open) => !open)}
      />
      <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
        <fetcher.Form method="post">
          <CommandInput
            placeholder={dialogPlaceHolder}
            value={inputValue}
            onValueChange={onChangeHandler}
          />
        </fetcher.Form>
        <CommandList>
          <CommandEmpty>
            <div className="flex items-center px-3">
              <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
              <P>{searchBar.emptyState}</P>
            </div>
          </CommandEmpty>
          {fetcher.state !== 'idle' && (
            <div className="flex items-center justify-center py-3">
              <Spinner className="w-6 h-6" />
            </div>
          )}
          {fetcher.data ? (
            <CommandGroup heading={searchBar.dialogHeaderResults}>
              {fetcher.data?.predictions.map((place) => {
                return (
                  <CommandItem
                    key={place.place_id}
                    onSelect={() => selectCityAndClose(place.description)}
                  >
                    <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                    <span>{place.description}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ) : null}
          <CommandSeparator />
          <CommandGroup heading={searchBar.importantCities}>
            {searchBar.importantCitiesArray.map((city) => (
              <CommandItem
                key={city}
                onSelect={() => {
                  selectCityAndClose(city);
                }}
              >
                <LiaMapMarkerAltSolid className="mr-2 h-4 w-4" />
                <span>{city}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchInput;
