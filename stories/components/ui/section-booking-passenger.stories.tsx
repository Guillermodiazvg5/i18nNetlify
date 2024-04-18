import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import CardBookingPassenger from '@mitimiti/components/card-booking-passenger';

const meta: Meta = {
  title: 'SectionBookingPassenger/Passenger',
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    () => {
      const RemixStub = createRemixStub([
        {
          path: '/',
          Component: () => (
            <div className="m-8">
              {' '}
              <CardBookingPassenger />
            </div>
          ),
        },
      ]);
      return <RemixStub />;
    },
  ],
};
