import type { Meta, StoryObj } from '@storybook/react';

import { SummaryTrip } from '../../../app/components/ui/summary-trip';

const meta = {
  title: 'Trip/SummaryTrip',
  component: SummaryTrip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SummaryTrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TripSummary: Story = {
  args: {
    finishLocation: 'Manizales',
    hourFinish: '16:30',
    numberOfPassengers: `3 pasajeros`,
    hourStart: '6:00',
    startLocation: 'Medellin',
    renderAvatars: () => <div>Avatars</div>,
  },
};
