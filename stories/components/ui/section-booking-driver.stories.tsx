import type { Meta, StoryObj } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import CardBookingDriver from '@mitimiti/components/card-booking-driver';

const meta: Meta = {
  title: 'SectionBookingDriver/Driver',
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
              <CardBookingDriver />
            </div>
          ),
        },
      ]);
      return <RemixStub />;
    },
  ],
};
