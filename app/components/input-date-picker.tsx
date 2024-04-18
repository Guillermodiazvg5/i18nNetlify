import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { es } from 'date-fns/locale';
import { useSearchParams } from '@remix-run/react';

import { cn } from '@mitimiti/lib/utils';
import { Button } from '@mitimiti/components/ui/button';
import { Calendar } from '@mitimiti/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@mitimiti/components/ui/popover';
import { useTranslation } from '@mitimiti/hooks/use-translation';

const InputDatePicker = ({
  buttonId,
  defaultDate,
}: {
  buttonId: string;
  defaultDate?: string;
}) => {
  const today = new Date();
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(
    defaultDate ? new Date(Number(defaultDate)) : today
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();
  const { inputDatePicker } = t('components', { returnObjects: true }) as {
    inputDatePicker: {
      placeHolderButton: string;
      name: string;
    };
  };

  const onChangeHandler = (date: Date) => {
    setDate(date);
    const currentTimeStamp = date.getTime();
    searchParams.set('date', currentTimeStamp.toString());
    setSearchParams(searchParams, {
      preventScrollReset: true,
    });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={buttonId}
          variant={'outline'}
          data-testid={`test-id-${buttonId}`}
          className={cn(
            'justify-start border-gray-200 text-left font-normal text-gray-500 focus-visible:bg-white hover:bg-white hover:text-gray-500',
            !date && 'text-muted-foreground',
            !date ? 'text-gray-500' : 'text-gray-900'
          )}
        >
          <CalendarIcon
            className={cn(
              'mr-2 h-4 w-4 text-gray-500 hover:text-gray-500',
              !date ? 'text-gray-500' : 'text-gray-900'
            )}
          />
          {date ? (
            format(date, 'PPP')
          ) : (
            <span className={`${!date ? 'text-gray-500' : 'text-gray-900'}`}>
              {inputDatePicker.placeHolderButton}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={{ before: today }}
          mode="single"
          locale={es}
          selected={date}
          onSelect={(selectedDay) => onChangeHandler(selectedDay || today)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { InputDatePicker };
