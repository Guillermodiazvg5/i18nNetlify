import type { Meta, StoryObj } from '@storybook/react';

import { CardTrip } from '../../../app/components/ui/card-trip';
import { Button } from '../../../app/components/ui/button';
import { SummaryTrip } from '../../../app/components/ui/summary-trip';
import { Avatar } from '../../../app/components/ui/avatar';
import { FaStar } from 'react-icons/fa6';
import { AvatarWithName } from '../../../app/components/ui/avatar-with-name';
import { H6 } from '@mitimiti/components/ui/typography/h6';

const meta = {
  title: 'Trip/CardTrip',
  component: CardTrip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardTrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardTripPublished: Story = {
  render: () => {
    return (
      <div className="p-4">
        <CardTrip
          titleText="Viernes, 29 marzo"
          renderFotter={() => (
            <Button className="w-full first-letter:capitalize">
              ofrece asciento
            </Button>
          )}
        >
          <>
            <SummaryTrip
              finishLocation="Manizales"
              hourFinish="16:30"
              numberOfPassengers="3"
              hourStart="6:00"
              startLocation="Medellin"
              renderAvatars={() => (
                <Avatar
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  fallback="JA"
                  classNameWrapper=""
                  classNameAvatar=""
                  classNameFallback=""
                />
              )}
            />
            <p className="text-center text-sm font-bold tracking-widest">
              $50.000 POR PERSONA
            </p>
          </>
        </CardTrip>
      </div>
    );
  },
};

export const CardTripPassenger: Story = {
  render: () => {
    return (
      <div className="p-4">
        <CardTrip
          titleText="Viernes, 29 marzo"
          renderHeader={() => (
            <div className="flex items-center gap-2">
              <Avatar
                src="https://github.com/shadcn.png"
                alt="Avatar"
                fallback="JA"
                classNameWrapper=""
                classNameAvatar=""
                classNameFallback=""
              />
              <h6 className="uppercase text-sm font-bold">noah</h6>
            </div>
          )}
          renderFotter={() => (
            <div>
              <Button className="w-full flex-1 first-letter:capitalize mb-2">
                Ofrece asciento
              </Button>
              <Button
                variant="outline"
                className="w-full first-letter:capitalize"
              >
                Enviar un mensaje
              </Button>
            </div>
          )}
        >
          <SummaryTrip
            finishLocation="Manizales"
            hourFinish="16:30"
            numberOfPassengers="3"
            hourStart="6:00"
            startLocation="Medellin"
          />
        </CardTrip>
      </div>
    );
  },
};

export const CardMatch: Story = {
  render: () => {
    return (
      <div className="p-4">
        <CardTrip
          titleText="Viernes, 29 marzo"
          renderHeader={() => (
            <AvatarWithName
              picture={'https://github.com/shadcn.png'}
              alt="Avatar"
              fallback="JA"
              name="Cristina"
            >
              <H6 className="font-bold">4.9</H6>
              <FaStar className="text-yellow" />
            </AvatarWithName>
          )}
          renderFotter={() => (
            <div>
              <Button className="w-full flex-1 first-letter:capitalize mb-2">
                Envia un mensaje
              </Button>
              <Button
                variant="outline"
                className="w-full first-letter:capitalize"
              >
                Cancela mi solicitud
              </Button>
            </div>
          )}
        >
          <>
            <SummaryTrip
              finishLocation="Manizales"
              hourFinish="16:30"
              numberOfPassengers="3"
              hourStart="6:00"
              startLocation="Medellin"
            />
            <p className="text-center text-sm font-bold tracking-widest">
              $50.000 POR PERSONA
            </p>
          </>
        </CardTrip>
      </div>
    );
  },
};
